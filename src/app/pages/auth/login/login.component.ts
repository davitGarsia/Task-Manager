import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  sub$ = new Subject()
  validateForm!: UntypedFormGroup;

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
    this.authService.login(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.router.navigate(['./application']);

      })
  }
}
