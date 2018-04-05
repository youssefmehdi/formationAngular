import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    RouterModule
  ],
  declarations: [NavComponent,
    ItemComponent,
    StateDirective,
    FormComponent],
  exports: [NavComponent,
    ItemComponent,
    StateDirective,
    FormComponent]
})
export class SharedModule { }
