import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Campaign, CampaignDetail, Donor } from '../model/campaign';
import { SocketService } from './socket.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = `${environment.apiBaseUrl}/campaigns`;
  campaigns = signal<Campaign[]>([]);
  campaignDetail = signal<CampaignDetail | null>(null);

  constructor(private http: HttpClient, private socketService: SocketService, private toastr: ToastrService) {
    this.listenToSocket()
  }

  loadCampaigns() {
    this.http.get<Campaign[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.campaigns.set(data);
      },
      error: (err) => {
        this.toastr.error('An error occurred while loading campaigns')
      }
    });
  }

  getCampaignById(id: string) {
    this.http.get<CampaignDetail>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => this.campaignDetail.set(data),
      error: (err) => this.toastr.error('Error loading campaign detail')
    });
  }

  addDonor(campaignId: number | string, donor: Donor, local: boolean = true) {
    if (!campaignId && !donor) return
    this.socketService.sendMessage({
      type: 'donation',
      campaignId,
      donor
    });
  }

  private listenToSocket() {
    this.socketService.connect(environment.wsUrl);
    this.socketService.onMessage((msg) => {
      if (msg.type === 'donation') {
        let donor: { name: string; amount: number };
        if (typeof msg.donor === 'string') {
          donor = {
            name: msg.donor,
            amount: Number(msg.amount) || 0
          };
        } else {
          donor = {
            name: msg.donor.name,
            amount: Number(msg.donor.amount) || 0
          };
        }
        this.campaignDetail.update((current) => {
          if (!current || current.id != msg.campaignId) return current;
          return {
            ...current,
            donors: [...current.donors, donor],
            currentAmount: current.currentAmount + donor.amount
          };
        });
      }
    });
  }

}
