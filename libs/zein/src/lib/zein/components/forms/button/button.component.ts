import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() outline = false;
  @Input() icon: string | null = null;
  @Input() loading = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // New size input

  @Output() buttonClick = new EventEmitter<Event>();

  get buttonClass() {
    let classes = `btn-${this.color} btn-${this.size}`;
    if (this.outline) {
      classes += ` btn-outline`;
    }
    if (this.loading) {
      classes += ` btn-loading`;
    }
    return classes;
  }

  onClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}
