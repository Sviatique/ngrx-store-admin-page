import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { UsersPageComponent } from './containers/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
