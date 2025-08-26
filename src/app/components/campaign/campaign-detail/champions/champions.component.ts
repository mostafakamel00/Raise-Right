import { Component } from '@angular/core';
import { InputComponent } from "../../../../core/components/input/input.component";
import { PrimaryButtonComponent } from "../../../../core/components/primary-button/primary-button.component";

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [InputComponent, PrimaryButtonComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent {

}
