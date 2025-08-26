import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, PrimaryButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
