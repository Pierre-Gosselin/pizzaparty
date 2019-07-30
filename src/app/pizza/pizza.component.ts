import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.models';

@Component({
  selector: 'app-pizza',
  template: `
  <div *ngIf="selectedPizza">
    <h2>{{selectedPizza.name}}</h2>
    <div><label>id: </label>{{selectedPizza.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedPizza.name" placeholder="name">
    </div>
    <div><label>price: </label>{{selectedPizza.price}}</div>
  </div>
  `,
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  // On transforme selectedPizza en attribut HTML
  @Input() selectedPizza : Pizza;
  constructor() { }

  ngOnInit() {
  }

}
