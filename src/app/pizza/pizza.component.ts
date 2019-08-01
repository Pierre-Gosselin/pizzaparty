import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})

export class PizzaComponent implements OnInit {  
  // On tranforme le selectedPizza en attribut HTML
  @Input() selectedPizza: Pizza;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
  }

  /**
   * Cette fonctionne appellera le service pizza
   * pour modifier la pizza sélectionnée
   */
   update(){
     console.log(this.selectedPizza);
     this.pizzaService.updatePizza(this.selectedPizza);
     this.selectedPizza = null;
   }
}
