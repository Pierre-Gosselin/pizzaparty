import { Component } from '@angular/core';

export class Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: "assets/queen.jpg", description: "Sauce tomate, mozzarella, jambon et double champignons frais."},
  { id: 2, name: '4 fromages', price: 13, image: "assets/fromage.jpg", description: "Sauce tomate ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP." },
  { id: 3, name: 'Orientale', price: 11, image: "assets/orientale.jpg", description: "Sauce tomate, mozzarella, double merguez** et champignons frais." },
  { id: 4, name: 'Cannibale', price: 9, image: "assets/cannibale.jpg", description: "Sauce barbecue, mozzarella, boulettes au bœuf*, filet de poulet rôti et mariné et merguez**." }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
  pizzas = PIZZAS;
  pizza: Pizza={
    id:1,
    name: '4 fromages',
    price: 10,
    image: "no-image.jpg",
    description: "pizza"
  }
}
