import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  email: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] )
  })

  touched: boolean = false;

  submit() {
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
