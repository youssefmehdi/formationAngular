import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    NgbModule.forRoot(),
    PageNotFoundModule,
    HomeModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
