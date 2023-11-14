import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const errors: ValidationErrors = {};
    const maxDate = new Date().toLocaleDateString().split('.').reverse().join('-');

    if (value > maxDate) {
    errors['wrongDate'] = 'The title is too short.';
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
