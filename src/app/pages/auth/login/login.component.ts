import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {CookieService} from "../../../core/services/cookie.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  sub$ = new Subject();
  validateForm!: UntypedFormGroup;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isRegistered: boolean = false;
  mobile: boolean = false;
  spinner: boolean = false;
  diameter: number = 30;

  @ViewChild('password') password!: ElementRef;

  ngAfterViewInit(): void {
    window.innerWidth <= 1024 ? this.mobile = true : this.mobile = false;
    this.route.queryParamMap.subscribe(params => {
      params.get('email') && !params.get('fromRegistration') ? (this.form.get('email')?.setValue(params.get('email')), this.isRegistered = true) : null;
    });
    this.isRegistered ? this.password.nativeElement.focus() : null;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.spinner = true;
    this.authService
      .login(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        if(res) {
          this.router.navigate(['/stepper']);
        }
      });

  }
}
