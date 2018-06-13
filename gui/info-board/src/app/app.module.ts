import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { VoteListComponent } from './vote-list/vote-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    VoteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
