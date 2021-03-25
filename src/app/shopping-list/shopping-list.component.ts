import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  private igSub: Subscription;
  ingredients : Ingredient[]; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients(); 
    this.igSub = this.shoppingListService.addedToShoppingList.subscribe(
                () => {
                this.ingredients = this.shoppingListService.getIngredients();
                }
    );
  }

  ngOnDestroy(){
    this.igSub.unsubscribe();
  }
}
