import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const errors: ValidationErrors = {};

    // Check for 8 characters
    if (value.length < 8) {
    errors['minLength'] = 'Password must be at least 8 characters.';
    }

    // Check for mixture of both uppercase and lowercase letters
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
    errors['caseMix'] = 'Your password must have a mixture of both uppercase and lowercase letters.';
    }

    // Check for mixture of letters and numbers
    if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
    errors['alphanumeric'] = 'Your password must have a mixture of letters and numbers.';
    }

    // Check for at least one special character
    if (!/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(value)) {
    errors['specialChar'] = `Your password must have at least one special character, e.g., ! @ # ? ].`;
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
