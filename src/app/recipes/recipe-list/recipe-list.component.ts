import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hyderabadi Biryani','Spicy & Delicious ','https://c.ndtvimg.com/2018-10/ohqcobr_handi-biryani_625x300_08_October_18.jpg'),
    new Recipe('South-Indian BreakFast','Breakfast Thali','https://miro.medium.com/max/700/1*InlgltnGNwj7W93dJ_oQ_g.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
