import {Component, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../../core/services/drawer.service';
import {BoardService} from "../../../core/services/board.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent{
  isOpen = false;
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private drawerService: DrawerService,
              private route: ActivatedRoute,
              private boardService: BoardService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.boardService.getBoards(params['id']).subscribe({
          next: res => console.log(res),
        })
        console.log(params['id'])
      }
    })


    console.log('hi');
    this.drawerService.isDrawerOpen$.subscribe((res: boolean) => {
      if (res) {
        this.drawer?.open();
      } else {
        this.drawer?.close();
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
