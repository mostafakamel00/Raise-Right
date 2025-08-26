import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from "../../../../core/components/progress-bar/progress-bar.component";
import { FallbackImagePipe } from '../../../../core/pipe/fallback-image.pipe';
import { CampaignService } from '../../../../core/services/campaign.service';

@Component({
  selector: 'app-campaign-stats',
  standalone: true,
  imports: [ProgressBarComponent, FallbackImagePipe],
  templateUrl: './campaign-stats.component.html',
  styleUrl: './campaign-stats.component.scss'
})
export class CampaignStatsComponent {
  campaignService = inject(CampaignService)
  campaign = this.campaignService.campaignDetail;
}
