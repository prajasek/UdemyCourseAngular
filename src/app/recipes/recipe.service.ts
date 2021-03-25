import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipeSelected = new Subject<Recipe>();
 
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel','Super tasty Scnitzel', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg',
        [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)] ),
        new Recipe('Burger','Chicken Burger ', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg',
        [new Ingredient("Meat", 1), new Ingredient("Buns", 2)] ),
        new Recipe('Fries','French fries', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg',
        [new Ingredient("French Fries", 20)] )
      ];

      constructor(private shoppingListService: ShoppingListService){
      }

      getRecipes(){
          return this.recipes.slice(); // get copy of the 'recipes' array
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        for(let i=0; i<ingredients.length; i++) {
            this.shoppingListService.addToShoppingList(ingredients[i]);
        }
      }
}