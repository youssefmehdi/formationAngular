import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ItemComponent],
  exports: [NavComponent, ItemComponent]
})
export class SharedModule { }
