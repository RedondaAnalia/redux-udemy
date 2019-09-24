//Angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Environments
import { environment } from '../environments/environment';

//Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Modulos personalizados.
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';

//Componentes
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    IngresoEgresoModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
