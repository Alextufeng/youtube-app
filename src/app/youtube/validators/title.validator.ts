import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export function titleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const errors: ValidationErrors = {};

    // Check for 3 characters
    if (value.length < 3) {
    errors['minLength'] = 'The title is too short.';
    }
    // Check for 20 characters
    if (value.length > 20) {
      errors['maxLength'] = 'The title is too long.';
      }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
