import {AfterViewInit, Component} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services";
import {ActivatedRoute, Router} from "@angular/router";
import {checkPasswordValidator} from "../../../core/validators/form.validators";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements AfterViewInit {



  form: FormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: checkPasswordValidator}
  );


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  mobile: boolean = false;

  ngAfterViewInit(): void {
    window.innerWidth <= 1024 ? this.mobile = true : this.mobile = false;
    this.route.queryParamMap.subscribe(params => {
      params.get('email') ? this.form.get('email')?.setValue(params.get('email')) : null;
    });
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    this.authService.register(this.form.value)
      .subscribe(res => {
        this.router.navigate(['/auth/login'], {queryParams: {email: this.form.get('email')!.value}});
        console.log(res)
      })
  }
}
