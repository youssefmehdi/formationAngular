import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddItemComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes // <-- debugging purposes only
    )
    // other imports here
  ]
})

export class ItemsRoutesModule { }
