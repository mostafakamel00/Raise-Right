import { Component, Input } from '@angular/core';
import { BreadCrumb } from '../../model/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {
  @Input('linkMap') linkMap: BreadCrumb[] = [];
}
