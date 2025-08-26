import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Campaign, CampaignDetail, Donor } from '../model/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = `${environment.apiBaseUrl}/campaigns`;

  campaigns = signal<Campaign[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  campaignDetail = signal<CampaignDetail | null>(null);
  constructor(private http: HttpClient) { }

  loadCampaigns() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Campaign[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.campaigns.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading campaigns:', err);
        this.error.set('حدث خطأ أثناء تحميل الحملات');
        this.loading.set(false);
      }
    });
  }

  getCampaignById(id: string) {
    this.http.get<CampaignDetail>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => this.campaignDetail.set(data),
      error: (err) => console.error('Error loading campaign detail:', err)
    });
  }

  addDonor(campaignId: number | string, donor: Donor) {
    this.campaignDetail.update((current) => {
      if (!current || current.id != campaignId) return current;

      return {
        ...current,
        donors: [...current.donors, donor],
        currentAmount: current.currentAmount + donor.amount
      };
    });
  }

}
