import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItem } from '../search-item.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() item: DataItem;
  /* @Input() set item(item: DataItem) {
    this.fullItem = item;
  } */
}
