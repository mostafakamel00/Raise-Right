import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  @Input() label: string = ''
  @Input() isPrimary: boolean = true

  @Output() handleClick = new EventEmitter<boolean>();

  click() {
    this.handleClick.emit(true);
  }
}
