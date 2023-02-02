import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperComponent} from "./stepper.component";
import {StepperRoutingModule} from "./stepper-routing.module";
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    StepperComponent,
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    MatStepperModule, FormsModule,
    ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ]
})
export class StepperModule { }
