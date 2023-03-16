import {Injectable} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  constructor() {
  }

  public sort = new Subject<string>();
  public search = new Subject<string>();
  public view = new Subject<string>();

  setSort(value: string) {
    this.sort.next(value);
  }

  preventMultipleNext: string = '';

  setSearch(value: string) {
    if (this.preventMultipleNext !== value) {
      this.search.next(value);
    }
  }

}
