import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { ItemsRoutesModule } from './items-routes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutesModule
  ],
  declarations: [ListItemsComponent, AddItemComponent],
  exports: [ListItemsComponent, AddItemComponent]
})
export class ItemsModule { }
