import { Component } from '@angular/core';
import { CoffeeListComponent } from '../coffee-list/coffee-list.component';
import { CoffeeService } from '../../Services/coffee.service';
import { CoffeeCard } from '../../Interfaces/coffee-card';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CoffeeListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  coffees: CoffeeCard[] = [];
  filteredCoffees: CoffeeCard[] = [];
  allSelected: boolean = true;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() : void {
    this.coffeeService.getCoffeeInformation().subscribe(data => {
      this.coffees = data;
      this.filteredCoffees = data;
    });
  }

  handleAllClick() {
    this.filteredCoffees = this.coffees;
    this.allSelected = true;
  }
  handleAvailableClick() {
    this.filteredCoffees = this.coffees.filter(coffee => coffee.available);
    this.allSelected = false;
  }
}
