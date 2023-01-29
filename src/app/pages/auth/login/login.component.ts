import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services";
import {Router} from "@angular/router";

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

  validateForm!: UntypedFormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    this.authService.login(this.form.value).subscribe(res => {
    this.router.navigate(['/ '])
    })
  }
}
