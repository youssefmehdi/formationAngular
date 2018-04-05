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

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';

import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  declarations: [AppComponent],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
