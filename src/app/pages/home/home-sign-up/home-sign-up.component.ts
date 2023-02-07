import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToggleSignupService} from "../../../core/services";

@Component({
  selector: 'app-home-sign-up',
  templateUrl: './home-sign-up.component.html',
  styleUrls: ['./home-sign-up.component.scss']
})
export class HomeSignUpComponent {

  constructor(
    private router: Router,
    public toggleSignup: ToggleSignupService
  ) { }

  email: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] )
  })

  touched: boolean = false;

  onSubmit() {
    this.touched = true;
    this.email.get('email')?.markAsTouched();

    setTimeout(()=>{
      this.touched = false;
      this.email.get('email')?.markAsUntouched();
    }, 4000)

    let email = this.email.get('email')?.value

    this.email.valid ? this.router.navigate(['../auth'], {queryParams: {email: email}}) : null ;
  }

  focus() {
    this.touched = false;
  }

}
