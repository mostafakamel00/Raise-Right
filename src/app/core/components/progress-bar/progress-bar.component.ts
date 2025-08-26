import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() value: number = 0
  @Input() max: number = 100;


  get percentage(): number {
    return this.max > 0 ? Math.min(100, (this.value / this.max) * 100) : 0;
  }

}
