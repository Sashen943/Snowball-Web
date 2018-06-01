import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import swal from 'sweetalert';

type UserFields = 'email' | 'password' | 'confirm_password';

type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'confirm_password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
      'match': 'Passwords dont match.',
    },
  };
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
   }

  ngOnInit() {
    this.buildForm();
  }

  signup() {
    this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password'])
    .then(result => {
      swal({
        title: 'Registered',
        text: 'Registered with username: ' + this.userForm.value['email'],
        icon: 'success',
      });
      return this.router.navigate(['home']);
    }
    )
    .catch(error => {
      swal({
        title: 'Registration failed',
        text: error.message,
        icon: 'error',
      });
    });
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();
  }

  private afterAdd() {
    return this.router.navigate(['home']);
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
}
