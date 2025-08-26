import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from "./core/components/primary-button/primary-button.component";
import { InputComponent } from "./core/components/input/input.component";
import { ProgressBarComponent } from "./core/components/progress-bar/progress-bar.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryButtonComponent, InputComponent, ProgressBarComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'raise-right';
}
