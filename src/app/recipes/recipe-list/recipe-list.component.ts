import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Array<Recipe> = new Array<Recipe>();
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activtaedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.activtaedRoute });
  }
}
