import { emailValidation } from './email-validation';
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appEmail]',
    providers: [
      {
        provide: NG_VALIDATORS,
        useExisting: EmailDirective,
        multi: true
      }
    ]
  })
  export class EmailDirective implements OnChanges, Validator {
  
    @Input() appEmail: string[] = [];
  
    validator: ValidatorFn = () => null;
  
    ngOnChanges(change: SimpleChanges): void {
      const EmailChange = change['appEmail'];
      if (EmailChange) {
        this.validator = emailValidation(EmailChange.currentValue);
      }
    }
  
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      return this.validator(control);
    }
  
  }
  