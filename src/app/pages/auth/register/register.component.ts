import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services";
import {Router} from "@angular/router";
import {checkPasswordValidator} from "../../../core/validators/form.validators";
import {Subject, takeUntil} from "rxjs";


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
    }, {validators: checkPasswordValidator}

  );

  sub$ = new Subject();

  constructor(
    private authService: AuthService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {

  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    this.authService.register(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.router.navigate(['/auth/login']);
        console.log(res)

    })
  }
}
