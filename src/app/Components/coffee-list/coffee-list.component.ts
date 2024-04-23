import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CoffeeCard } from '../../Interfaces/coffee-card';
import { CoffeeService } from '../../Services/coffee.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent {
  @Input() coffees: CoffeeCard[] = [];
}
