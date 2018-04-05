import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { CollectionService } from './core/services/collection/collection.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    NgbModule.forRoot(),
    HomeModule,
    // ItemsModule,  routers will load it in lazy mode
    AppRoutingModule,
    PageNotFoundModule,
  ],
  declarations: [AppComponent],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
