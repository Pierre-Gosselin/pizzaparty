import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  id : number;
  pizza: Pizza;

  // on peut injecter plusieurs services dans le constructeur
  constructor(
    private route: ActivatedRoute,
    private pizzaService : PizzaService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // On récupère la pizza de la route actuelle
    this.pizzaService.getOnePizza(this.id).then(
      pizza => this.pizza = pizza
    );
  }
}
