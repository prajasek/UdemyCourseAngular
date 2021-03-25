import { Ingredient } from "../shared/ingredient.model";
// import {EventEmitter} from '@angular/core';
import { Subject } from "rxjs";

export class ShoppingListService{
    
    addedToShoppingList = new Subject<void>();

    private ingredients: Ingredient[] =  [
        new Ingredient('Apple', 4),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addToShoppingList(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.addedToShoppingList.next();
    }

}