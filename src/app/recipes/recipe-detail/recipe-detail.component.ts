import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddShoppingList(): void {
    this.recipeService.addIngredientsToShoppinList(this.recipe.ingredients);
  }
  onEdit(): void {
    this.router.navigate(['../', this.id, 'edit'], {
      relativeTo: this.activatedRoute,
    });
  }
}
