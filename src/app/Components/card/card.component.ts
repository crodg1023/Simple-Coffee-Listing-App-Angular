import { Component, Input } from '@angular/core';
import { CoffeeCard } from '../../Interfaces/coffee-card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() coffeeInformation!: CoffeeCard;
}
