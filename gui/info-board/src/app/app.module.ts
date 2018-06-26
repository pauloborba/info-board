import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { PostComponent } from './post/post.component';
import { RepElectionComponent } from './rep-election/rep-election.component';
import { RepDecisionsComponent } from './rep-decisions/rep-decisions.component';
import { RepHistoryComponent } from './rep-history/rep-history.component';
import { EligiblesComponent } from './eligibles/eligibles.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule } from '@angular/material';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationComponent } from './notification/notification.component';
import { INetworking } from './networking/networking.service.interface';
import { NetworkingService } from './networking/networking.service';
import { MockNetworkingService } from './networking/mocknetworking.service';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class MaterialModules {}


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    VoteListComponent,
    PostComponent,
    RepElectionComponent,
    RepDecisionsComponent,
    RepHistoryComponent,
    EligiblesComponent,
    // VotacaoPautaComponent,
    NavigationbarComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
  ],
  providers: [NetworkingService, MockNetworkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
