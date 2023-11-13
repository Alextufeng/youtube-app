import { ValidatorFn, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const reg = /\w+@{1}\w+\.{1}\w+/i;
    const value = control.value;
    return value.match(reg) ? null : { wrongMail: true };
  };
}
