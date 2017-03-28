import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Recipe Box</h1>
  <h3>{{appFocus}}</h3>
  <ul>
  <li>{{Recipes[0].title}}</li>
  <li>{{Recipes[0].ingredients}}</li>
  <li>{{Recipes[0].directions}}</li>
  <hr>
  <li *ngFor="let currentRecipe of Recipes">{{currentRecipe.title}}</li>
  </ul>
  </div>
  `
})

export class AppComponent {
  appFocus: string = 'Angular Homework';
  Recipes: Recipe[] = [
    new Recipe("Mac and cheese", "pasta and cheese", "read the box XD"),
    new Recipe("pbj", "penut butter, jelly, bread", "jelly on one side and penut butter on the other"),
    new Recipe("tuna salad/sandwhich", "tuna, mayo, musterd, and pickels ", "mix a even amount of mayo and musterd then add pickels and the tuna")
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
