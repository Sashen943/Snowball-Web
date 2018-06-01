import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';


// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
import {AngularFireDatabaseModule} from 'angularfire2/database';

// See README for Firebase setup instructions
// 1. Delete Me!
import { firebaseConfig } from '../environments/environment';
// 2. Add your project credentials to environments/environment.ts
// 3. Then use it in the imports section below environment.firebase


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    AngularFireModule.initializeApp(firebaseConfig, 'firestarter'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
