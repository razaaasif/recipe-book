import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  onAdd(): void {
    const name = this.nameInput.nativeElement.value;
    const amount = this.nameInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.slService.addIngrediant(newIngredient);
  }
  onDelete(): void {}
  onReset(): void {}
}
