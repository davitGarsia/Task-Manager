import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, MatSidenavModule, RouterModule],
})
export class MainLayoutModule {}
