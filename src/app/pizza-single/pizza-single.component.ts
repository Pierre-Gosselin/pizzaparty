import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Pizza } from '../models/pizza.models';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
    private pizzaService : PizzaService,
    private location: Location,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // On récupère la pizza de la route actuelle
    this.pizzaService.getOnePizza(this.id).then(
      pizza => this.pizza = pizza
    );
  }

  // On clique pour ouvrir la modal
  open(content){
    this.modalService.open(content).result.then(
      result => {
        // Ce code s'exécute à la fermeture de la modal
        if (result === 'delete')
        {
          this.pizzaService.deletePizza(this.pizza).then(pizza => this.location.back())
        }
    });
  }
}
