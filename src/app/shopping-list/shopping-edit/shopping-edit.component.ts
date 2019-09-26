import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


@ViewChild('inputName', {static: false}) inputNameRef: ElementRef;
@ViewChild('inputAmount', {static: false}) inputAmountRef: ElementRef;
@Output() IngredientModel =  new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient =  new Ingredient(this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value);
    this.IngredientModel.emit(ingredient);
  }

}
