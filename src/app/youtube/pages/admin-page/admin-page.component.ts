import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BUTTONS } from '../../models/constants';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { titleValidator } from '../../validators/title.validator';
import { dateValidator } from '../../validators/date.validator';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public adminForm: FormGroup;
  public createButton = BUTTONS.create;
  public resetButton = BUTTONS.reset;

  public ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl('', [Validators.required, titleValidator()]),
      description: new FormControl('', [Validators.maxLength(255)]),
      image: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, dateValidator()]),
    });
  }

  public createCard() {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value)
    }
  }

  public formReset() {
    this.adminForm.reset();
  }
}
