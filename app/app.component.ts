import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Recipe Box</h1>
  <h3>{{appFocus}}</h3>
  <hr>
  <div [class]="ratingColor(currentRecipe)" (click)="isHot(currentRecipe)" *ngFor="let currentRecipe of Recipes">
  <h4 (click)="showRecipe(currentRecipe)">{{currentRecipe.title}}</h4>
  <!-- <h4 id="ingredients">{{currentRecipe.ingredients}}</h4> -->
  <!-- <h4 id="directions">{{currentRecipe.directions}}</h4> -->
  <button class="btn" (click)="editRecipe()">Edit!</button> </div>
  </div>
  `
})

export class AppComponent {
  appFocus: string = 'Angular Homework';
  Recipes: Recipe[] = [
    new Recipe("Mac and cheese", "pasta and cheese", "read the box XD", 3),
    new Recipe("pbj", "penut butter, jelly, bread", "jelly on one side and penut butter on the other", 2),
    new Recipe("tuna salad/sandwhich", "tuna, mayo, musterd, and pickels ", "mix a even amount of mayo and musterd then add pickels and the tuna", 5)
  ];

  ratingColor(currentRecipe){
    if (currentRecipe.rating === 3){
      return "bg-danger";
    } else if (currentRecipe.rating === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  showRecipe(clickedRecipe : Recipe) {
    console.log("hi");
  }
}

export class Recipe {
  public hot: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public rating: number) { }
}
