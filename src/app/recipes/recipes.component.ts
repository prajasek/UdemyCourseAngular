import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  recipeSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeSub = this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
      )
  }

  ngOnDestroy(){
    this.recipeSub.unsubscribe();
  }

}
