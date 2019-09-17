import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new  Recipe('A Test Recipe',
                      'Tasty Food',
                        'https://therecipecritic.com/wp-content/uploads/2019/07/broccoli-ramen-salad-recipe-1-368x463.jpg'
                    )
  ];
  @Output() recipeEmitted =  new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeEmitted.emit(recipe);
  }

}
