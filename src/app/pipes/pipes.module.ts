import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframePipe } from './iframe.pipe';



@NgModule({
  declarations: [
    IframePipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    IframePipe
  ]
})
export class PipesModule { }
