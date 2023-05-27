import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public ingredients: Array<Ingredient>;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngrediants();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }
}
