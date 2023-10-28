import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItem } from '../search-item.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item: DataItem;
  /* @Input() set item(item: DataItem) {
    this.fullItem = item;
  } */
}
