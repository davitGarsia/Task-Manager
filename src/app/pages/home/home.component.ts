<<<<<<< HEAD
import { Component, HostListener, OnInit } from '@angular/core';
=======
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
>>>>>>> adc1ee5e21e535c77ad63b57cf50504d29e74851

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {
  scrolled: boolean = false;
  scrolledTop: boolean = false;

  @HostListener('window:scroll')
  onScroll() {
    window.scrollY >= 10 ? (this.scrolled = true) : (this.scrolled = false);
    window.scrollY >= window.innerHeight
      ? (this.scrolledTop = true)
      : (this.scrolledTop = false);
  }

  constructor() {}

  ngOnInit(): void {}
=======
export class HomeComponent implements AfterViewInit {

  scrolled: boolean = false;
  scrolledTop: boolean = false;

  @ViewChild('home') home!: ElementRef;

  ngAfterViewInit() {
    this.home.nativeElement.addEventListener('scroll', () => {
      let firstElPos = this.home.nativeElement.firstChild.getBoundingClientRect().top;
      firstElPos <= -10 ? this.scrolled = true : this.scrolled = false;
      firstElPos <= -window.innerHeight ? this.scrolledTop = true : this.scrolledTop = false;

      console.log(555)
    })
  }
>>>>>>> adc1ee5e21e535c77ad63b57cf50504d29e74851
}
