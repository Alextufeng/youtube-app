import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item: DataItem;
  /* @Input() set item(item: DataItem) {
    this.fullItem = item;
  } */
}
