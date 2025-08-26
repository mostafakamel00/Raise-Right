import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../../../core/components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-campaign-stats',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './campaign-stats.component.html',
  styleUrl: './campaign-stats.component.scss'
})
export class CampaignStatsComponent {

}
