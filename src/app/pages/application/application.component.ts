import {AfterViewInit, Component, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {PaginatorService} from "../../core/services/paginator.service";
import {ProjectInfoComponent} from "./project-setting/project-info/project-info.component";


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit{

  constructor(
    public paginator: PaginatorService
  ) {
  }
  sorts: any[] = [
    {value: 'ASC', viewValue: 'ASC'},
    {value: 'DESC', viewValue: 'DESC'}
  ];

  views: any[] = [
    {value: 'card'},
    {value: 'table'}
  ];

  value: string = 'DESC';
  view: string = 'card';

  ngOnInit() {
    this.paginator.sort.subscribe(value => {
      this.value = value;
    })
  }

  sortChanged() {
    this.paginator.setSort(this.value);
  }

  search(event: any) {
    setTimeout(()=>{
      this.paginator.setSearch(event.target.value)
      this.paginator.preventMultipleNext = event.target.value;
    },1000)
  }

  changeView() {
    this.paginator.view.next(this.view)
  }
}
