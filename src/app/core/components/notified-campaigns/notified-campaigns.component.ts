import { Component, inject } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-notified-campaigns',
  standalone: true,
  imports: [InputComponent, PrimaryButtonComponent],
  templateUrl: './notified-campaigns.component.html',
  styleUrl: './notified-campaigns.component.scss'
})
export class NotifiedCampaignsComponent {
  notifyService = inject(NotifyService)
  email: string = ''
  onSubscribe() {
    this.notifyService.onSubscribe(this.email)
    this.email = ''
  }
}
