import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {

  createPizza : Pizza = new Pizza();

  constructor(
    private pizzaService: PizzaService,
    private location: Location
    ) { }

  /**
    S'exécute au chargement de la page
   */
  ngOnInit() {
  }

  /**
    Au clic, on crée la pizza
   */
  save() {
    this.pizzaService.createPizza(this.createPizza).then(pizzaCreate => 
    this.location.back()
    )
  }
}
