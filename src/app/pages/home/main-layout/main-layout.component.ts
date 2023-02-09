import {Component, OnInit, ViewChild} from '@angular/core';
import {DrawerService} from "../../../core/services/drawer.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
    this.drawerService.isDrawerOpen$.subscribe((res: boolean) => {
      if(res) {
        this.drawer.open();
      } else {
        this.drawer?.close();
      }
    })
  }
}
