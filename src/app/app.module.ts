import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FrontComponent } from './front/front.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzaListComponent,
    FrontComponent,
    PizzaSingleComponent,
    PizzaCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { // On créer une route /pizzas sur notre application qui affichera le template du composant PizzaListComponent
        path: 'pizzas',
        component: PizzaListComponent
      },
      {
        path: '',
        component: FrontComponent
      },
      {
        path: 'pizzas/:id',
        component: PizzaSingleComponent
      },
      {
        path: 'pizza/create',
        component : PizzaCreateComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
