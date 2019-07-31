import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.models';


@Component({
  selector: 'app-pizza',
   // templateUrl: './pizza.component.html',
   template: `
   TEST COMPOSANT
    <div *ngIf= "selectedPizza">

      <h2>{{ selectedPizza.name }}</h2>
      <p> Prix : {{selectedPizza.price}} € </p>
    
      <div class="form-group">
        <label  class="input-group-text"  >La pizza choisie : </label>
        <input [(ngModel)]="selectedPizza.name" placeholder="name" class="form-control">
      </div>
    
  </div> <br>
 `,
  styleUrls: ['./pizza.component.scss']
})

export class PizzaComponent implements OnInit {  
  // On tranforme le selectedPizza en attribut HTML
  @Input() selectedPizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
