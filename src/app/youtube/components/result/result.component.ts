import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from '../../components/result-list/result-list.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, ResultListComponent],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {}
