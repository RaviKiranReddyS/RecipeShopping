import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('Basmati Rice Bag',1),
    new Ingredient('Spices',5),
    new Ingredient('ID batter',1),
    new Ingredient('Groundnuts for Chutney',1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
