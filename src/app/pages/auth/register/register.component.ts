import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    // {Validators: this.passwordMatchValidator('password', 'confirmPassword')}j
  );


  // passwordMatchValidator(password: string, confirmPassword1: string) {
  //    return (formGroup: FormGroup) => {
  //      const password = formGroup.controls[password];
  //      const confirmPassword = formGroup.controls[confirmPassword];
  //      if (password.value !== confirmPassword.value) {
  //        confirmPassword.setErrors({ passwordMatch: true });
  //      } else {
  //        confirmPassword.setErrors(null);
  //      }
  //    }
  //  }

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    this.authService.register(this.form.value).subscribe(res => {

    })
  }
}
