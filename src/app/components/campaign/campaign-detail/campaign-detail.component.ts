import { Component } from '@angular/core';
import { CampaignHeaderComponent } from "../campaign-header/campaign-header.component";
import { NotifiedCampaignsComponent } from "../../../core/components/notified-campaigns/notified-campaigns.component";
import { BreadCrumb } from '../../../core/model/breadcrumb';
import { CampaignStatsComponent } from "./campaign-stats/campaign-stats.component";
import { ChampionsComponent } from "./champions/champions.component";
import { PartnerComponent } from "./partner/partner.component";

@Component({
  selector: 'app-campaign-detail',
  standalone: true,
  imports: [CampaignHeaderComponent, NotifiedCampaignsComponent, CampaignStatsComponent, ChampionsComponent, PartnerComponent],
  templateUrl: './campaign-detail.component.html',
  styleUrl: './campaign-detail.component.scss'
})
export class CampaignDetailComponent {
  linkMap: BreadCrumb[] = [
    {
      name: 'Campaigns',
      route: '/Campaigns'
    },
    {
      name: 'Campaign Details',
      route: ''
    },
  ]
}
