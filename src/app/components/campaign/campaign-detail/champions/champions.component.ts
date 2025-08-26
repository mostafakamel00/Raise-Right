import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../core/components/input/input.component";
import { PrimaryButtonComponent } from "../../../../core/components/primary-button/primary-button.component";
import { CampaignService } from '../../../../core/services/campaign.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [InputComponent, PrimaryButtonComponent, CommonModule],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent {
  campaignService = inject(CampaignService)
  toastr = inject(ToastrService)
  campaign = this.campaignService.campaignDetail;
  donor = {
    name: '',
    amount: 0
  };

  onDonate() {
    if (!this.donor.name.trim() || this.donor.amount <= 0) {
      this.toastr.warning('Invalid donation data')
      return;
    }

    this.campaignService.addDonor(this.campaign()?.id!, this.donor);

    this.donor = { name: '', amount: 0 };
  }
}
