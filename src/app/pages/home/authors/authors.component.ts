import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors = [
    {
      firstName: 'Shavlego',
      lastName: 'Botchorishvili',
      imageUrl: '',
      profession: 'Front end Developer',
      social: [
        {
          image: '',
          url: ''
        }
      ]

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
