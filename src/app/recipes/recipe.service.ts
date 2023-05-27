import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes = [
    new Recipe(
      'A Testy Schnitzel',
      'A super-tasty Schnizel - just awesome',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French fires', 20)]
    ),
    new Recipe(
      'A big fat burger',
      'What else uou need to day?',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }

  addIngredientsToShoppinList(inegredient: Ingredient[]): void {
    this.shoppingListService.addIngrediants(inegredient);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
