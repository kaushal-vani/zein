import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class  CheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleCheck(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}