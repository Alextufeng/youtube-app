import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchButtonComponent } from '../header-search-button/header-search-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-search-input',
  standalone: true,
  imports: [CommonModule, HeaderSearchButtonComponent, FormsModule],
  templateUrl: './header-search-input.component.html',
  styleUrls: ['./header-search-input.component.scss']
})
export class HeaderSearchInputComponent {
  placeholder = "What are you want to find out?"
}
