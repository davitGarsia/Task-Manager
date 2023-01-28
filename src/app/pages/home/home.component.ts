import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrolled: boolean = false;
  scrolledTop: boolean = false;

  @HostListener('window:scroll')
  onScroll() {
    window.scrollY >= 10 ? this.scrolled = true : this.scrolled = false;
    window.scrollY >= window.innerHeight ? this.scrolledTop = true : this.scrolledTop = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
