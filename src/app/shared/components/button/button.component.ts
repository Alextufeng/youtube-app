import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string | null;

  @Input() disabled: boolean;

  @Input() type = 'button';

  @Output() onClick = new EventEmitter<any>(); // eslint-disable-line

  onClickButton(event: Event) {
    this.onClick.emit(event);
  }
}
