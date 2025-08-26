import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from "../../../../core/components/progress-bar/progress-bar.component";
import { CampaignDetail, defaultCampaignDetail } from '../../../../core/model/campaign';
import { FallbackImagePipe } from '../../../../core/pipe/fallback-image.pipe';

@Component({
  selector: 'app-campaign-stats',
  standalone: true,
  imports: [ProgressBarComponent, FallbackImagePipe],
  templateUrl: './campaign-stats.component.html',
  styleUrl: './campaign-stats.component.scss'
})
export class CampaignStatsComponent {
  @Input() item: CampaignDetail = defaultCampaignDetail
}
