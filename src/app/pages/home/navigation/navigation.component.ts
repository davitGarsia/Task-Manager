import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToggleSignupService} from "../../../core/services";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input('scrolled') scrolled!: boolean;

  constructor(
    private router: Router,
    private toggleSignup: ToggleSignupService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.toggleSignup.toggleVisible()
  }

  navigateToLogin() {
    this.router.navigate(['/auth'])
  }
}
