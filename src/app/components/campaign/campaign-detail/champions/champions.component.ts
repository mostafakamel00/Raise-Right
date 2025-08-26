import { Component, Input } from '@angular/core';
import { InputComponent } from "../../../../core/components/input/input.component";
import { PrimaryButtonComponent } from "../../../../core/components/primary-button/primary-button.component";
import { CampaignDetail, defaultCampaignDetail } from '../../../../core/model/campaign';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [InputComponent, PrimaryButtonComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent {
  @Input() item: CampaignDetail = defaultCampaignDetail

}
