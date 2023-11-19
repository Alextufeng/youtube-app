import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { BUTTONS } from '../../models/constants';
import { dateValidator } from '../../validators/date.validator';
import { titleValidator } from '../../validators/title.validator';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, MatIconModule, FormsModule],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  public adminForm: FormGroup;

  public tagForm: FormGroup;

  public tags: string[] = [];

  public createButton = BUTTONS.create;

  public resetButton = BUTTONS.reset;

  public tagsAddingButton = BUTTONS.tagsAdding;

  public ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl('', [Validators.required, titleValidator()]),
      description: new FormControl('', [Validators.maxLength(255)]),
      image: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, dateValidator()]),
    });
    this.tagForm = new FormGroup({
      tag: new FormControl('', Validators.required),
    });
  }

  public createCard() {
    if (this.adminForm.valid) {
      console.log({...this.adminForm.value, tags: this.tags}); // eslint-disable-line
    }
  }

  public saveTagItem() {
    if (this.tagForm.value) {
      this.tags.push(this.tagForm.value.tag);
    }
    this.tagForm.reset();
  }

  public deleteTagItem(index: number) {
    this.tags.splice(index, 1);
  }

  public formReset() {
    this.adminForm.reset();
    this.tagForm.reset();
    this.tags = [];
  }
}
