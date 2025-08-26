import { Component, computed } from '@angular/core';
import { CampaignHeaderComponent } from "../campaign-header/campaign-header.component";
import { CampaignCardComponent } from "../campaign-card/campaign-card.component";
import { NotifiedCampaignsComponent } from "../../../core/components/notified-campaigns/notified-campaigns.component";
import { BreadCrumb } from '../../../core/model/breadcrumb';
import { CampaignService } from '../../../core/services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [CampaignHeaderComponent, CampaignCardComponent, NotifiedCampaignsComponent],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.scss'
})
export class CampaignListComponent {
  linkMap: BreadCrumb[] = [
    {
      name: 'Campaigns',
      route: '/Campaigns'
    }
  ]

  campaigns = this.campaignService.campaigns;
  loading = this.campaignService.loading;
  error = this.campaignService.error;

  totalCampaigns = computed(() => this.campaigns().length);

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaignService.loadCampaigns();
  }
}
