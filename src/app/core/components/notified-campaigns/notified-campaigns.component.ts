import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-notified-campaigns',
  standalone: true,
  imports: [InputComponent, PrimaryButtonComponent],
  templateUrl: './notified-campaigns.component.html',
  styleUrl: './notified-campaigns.component.scss'
})
export class NotifiedCampaignsComponent {

}
