import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() value = '';
  @Input() checked = false;
  @Input() disabled = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange(): void {
    if (!this.disabled) {
      this.valueChange.emit(this.value);
    }
  }
}