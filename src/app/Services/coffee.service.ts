import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeCard } from '../Interfaces/coffee-card';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getCoffeeInformation() : Observable<CoffeeCard[]> {
    return this.http.get<CoffeeCard[]>('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
  }
}
