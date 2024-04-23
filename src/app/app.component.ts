import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { CoffeeListComponent } from './Components/coffee-list/coffee-list.component';
import { BodyComponent } from './Components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeListComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple-Coffee-Listing-App';
}
