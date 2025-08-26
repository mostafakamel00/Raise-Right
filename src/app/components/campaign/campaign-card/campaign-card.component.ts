import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from "../../../core/components/progress-bar/progress-bar.component";
import { Campaign, defaultCampaignDetail } from '../../../core/model/campaign';
import { RouterModule } from '@angular/router';
import { FallbackImagePipe } from '../../../core/pipe/fallback-image.pipe';

@Component({
  selector: 'app-campaign-card',
  standalone: true,
  imports: [ProgressBarComponent, RouterModule, FallbackImagePipe],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.scss'
})
export class CampaignCardComponent {
  @Input() item: Campaign = defaultCampaignDetail
}
