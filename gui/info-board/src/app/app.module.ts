import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { PostComponent } from './post/post.component';
import { RepElectionComponent } from './rep-election/rep-election.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    VoteListComponent,
    PostComponent,
    RepElectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
