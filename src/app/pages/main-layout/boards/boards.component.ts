import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../../core/services/drawer.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent {
  isOpen = false;
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
    console.log('hi');
    this.drawerService.isDrawerOpen$.subscribe((res: boolean) => {
      if (res) {
        this.drawer?.open();
        // this.isOpen = true;
      } else {
        this.drawer?.close();
        // this.isOpen = false;
      }
    });
  }

  toggleDrawer() {
    if (!this.isOpen) {
      this.drawerService.openDrawer();
      this.isOpen = true;
    } else if (this.isOpen) {
      this.drawerService.closeDrawer();
      this.isOpen = false;
    }
  }
}
