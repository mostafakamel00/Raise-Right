import { Component, Input } from '@angular/core';
import { BreadCrumbComponent } from "../../../core/components/bread-crumb/bread-crumb.component";
import { BreadCrumb } from '../../../core/model/breadcrumb';

@Component({
  selector: 'app-campaign-header',
  standalone: true,
  imports: [BreadCrumbComponent,],
  templateUrl: './campaign-header.component.html',
  styleUrl: './campaign-header.component.scss'
})
export class CampaignHeaderComponent {
  @Input() label: string = ''
  @Input() subLabel: string = ''
  @Input('linkMap') linkMap: BreadCrumb[] = [];

}
