import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  onSelect(selected: string): void {
    this.selected.emit(selected);
  }
}
