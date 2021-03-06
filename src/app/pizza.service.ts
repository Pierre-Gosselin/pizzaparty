import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.models';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  // Api en prod
  // https://my-json-server.typicode.com/pierre-gosselin/pizzaparty/pizza

  // Api en local
  // http:///localhost:3000/pizza

  // Récupérer toutes les pizzas
  // La fonction nous "promet" de renvoyer un tableau de pizzas.
  // toPromise() permet de récupérer une promesse
  getPizzas(): Promise<Pizza[]> {
    // On effectue une requête HTTP ou GET sur notre api
    // Angular renvoie par défaut un observable mais on le convertit en promesse avec toPromise()
    // Quand la promesse est recu (then), on envoie les pizzas de l'api
    // as pizza[] permet juste de tricher sur le type renvoyé par la fonction
    return this.http.get(this.apiUrl + '/pizza').toPromise().then(
      response => response as Pizza[]
    );
  }

  // Récupérer une pizza par son id
  getOnePizza(id: number): Promise<Pizza> {
    // On va chercher dans le tableau PIZZAS la pizza qui contient l'id passé en paramètre
    //return PIZZAS.find(pizza => pizza.id == id);
    return this.http.get(this.apiUrl + '/pizza/'+id).toPromise().then(
      response => response as Pizza
    );
  }

  /**
   * Permet de modifier une pizza sur notre API
   */
  updatePizza(pizza : Pizza): Promise<Pizza> {
    // La methode PUT de HTTP est la même que POST
    // Elle permet de mettre à jour un élément
    // Le premier arguement de put est l'URL de l'API
    // Le second argument est l'objet à mettre à jour
    return this.http.put(this.apiUrl + '/pizza'+pizza.id, pizza).toPromise().then((response) => response as Pizza);
  }

  /**
  Permet de créer une nouvelle pizza sur l'API
  1. Sur la page /pizzas, ajouter un lier pour créer une pizza
  2. Ce lien va vers /pizza/create qui est liée au composant PizzaCreate
  3. Le composant PizzaCreate va contenir une propriété pizza. Par défault, la pizza est à null. il contiendra également une méthode save()
  4. Le template du composant va contenir 3 champs name, price, image)
  Au clic sur le bouton du formulaire (Ajouter), on appellera la méthode save() du composant.
  5. Dans la méthode save() du composant, on appelera la méthode createPizza() de notre service pour insérer la pizza dans l'API via le service http (avec la méthode POST()).
  6. On masquera le formulaire après la sauvegarde.
    */
  createPizza(pizza :Pizza): Promise<Pizza>{
    return this.http.post(this.apiUrl + '/pizza', pizza).toPromise().then((response) => response as Pizza);
  }

  /**
    Permet de supprimer une pizza    
    */
  deletePizza(pizza :Pizza){
    return this.http.delete(this.apiUrl + '/pizza' + pizza.id).toPromise().then((response) => response as Pizza);
  }
}

