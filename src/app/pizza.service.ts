import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.models';

export const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: "queen.jpg", description: "Sauce tomate, mozzarella, jambon et double champignons frais."},
  { id: 2, name: '4 fromages', price: 13, image: "fromage.jpg", description: "Sauce tomate ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP." },
  { id: 3, name: 'Orientale', price: 11, image: "orientale.jpg", description: "Sauce tomate, mozzarella, double merguez** et champignons frais." },
  { id: 4, name: 'Cannibale', price: 9, image: "cannibale.jpg", description: "Sauce barbecue, mozzarella, boulettes au bœuf*, filet de poulet rôti et mariné et merguez**." },
  { id: 5, name: 'Montagnarde', price: 10, image: "montagnarde.jpg", description: "Crème fraîche légère, mozzarella, jambon cru, fromage à raclette et champignons frais."},
  { id: 6, name: 'Raclette', price: 13, image: "raclette.jpg", description: "Crème fraîche légère, mozzarella, pommes de terre, lardons et fromage à raclette."},
  { id: 7, name: 'Chèvre Miel', price: 12, image: "chevre-miel.jpg", description: "Crème fraîche légère, mozzarella, fromage de chèvre, miel."},
  { id: 8, name: 'Végétarienne', price: 5, image: "vegetarienne.jpg", description: "Sauce tomate, mozzarella, champignons frais, oignons émincés, poivrons verts et tomates fraîches.."},
  { id: 8, name: 'Provençale', price: 8, image: "provencale.jpg", description: "Sauce tomate, mozzarella, thon, tomates fraîches, oignons émincés et olives noires."}
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  // Récupérer toutes les pizzas
  getPizzas():Pizza[]{
    return PIZZAS;
  }

  // Récupérer une pizza par son id
  getOnePizza(id: number): Pizza {
    // On va chercher dans le tableau PIZZAS la pizza qui contient l'id passé en paramètre
    return PIZZAS.find(pizza => pizza.id == id);
  }
}

