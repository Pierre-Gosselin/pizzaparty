import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-front',
  styleUrls: ['./front.component.scss'],
  templateUrl : '/front.component.html'
})
export class FrontComponent implements OnInit {
  pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
  }

}
