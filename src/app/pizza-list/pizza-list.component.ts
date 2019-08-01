import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza : Pizza;

  // On injecte le sevice pizzaService dans le composant pour pourvoir l'utiliser avec this.pizzaService
  constructor(private pizzaService: PizzaService){}

  // Equivalent du document.ready
  // Quand le composant est prêt dans le DOM, on récupère les pizzas
  ngOnInit(){
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }
  onSelect(pizza: Pizza) :void
  {
    // On modifie la propriété pizza de l'instance
    // de appComponent
    this.selectedPizza = pizza;
  }
}
