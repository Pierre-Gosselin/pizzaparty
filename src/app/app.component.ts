import { Component } from '@angular/core';
import { Pizza } from './models/pizza.models';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: "queen.jpg", description: "Sauce tomate, mozzarella, jambon et double champignons frais."},
  { id: 2, name: '4 fromages', price: 13, image: "fromage.jpg", description: "Sauce tomate ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP." },
  { id: 3, name: 'Orientale', price: 11, image: "orientale.jpg", description: "Sauce tomate, mozzarella, double merguez** et champignons frais." },
  { id: 4, name: 'Cannibale', price: 9, image: "cannibale.jpg", description: "Sauce barbecue, mozzarella, boulettes au bœuf*, filet de poulet rôti et mariné et merguez**." },
  { id: 5, name: 'Montagnarde', price: 10, image: "montagnarde.jpg", description: "Crème fraîche légère, mozzarella, jambon cru, fromage à raclette et champignons frais."},
  { id: 6, name: 'Raclette', price: 13, image: "raclette.jpg", description: "Crème fraîche légère, mozzarella, pommes de terre, lardons et fromage à raclette."},
  { id: 6, name: 'Chèvre Miel', price: 12, image: "chevre-miel.jpg", description: "Crème fraîche légère, mozzarella, fromage de chèvre, miel."}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue chez PizzaEAT';
  pizzas = PIZZAS;
  pizza: Pizza;
  selectedPizza : Pizza;

  onSelect(pizza: Pizza) :void
  {
    // On modifie la propriété pizza de l'instance
    // de appComponent
    this.selectedPizza = pizza;
  }
}
