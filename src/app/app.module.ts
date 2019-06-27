import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './components/match/match.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { AgGridModule } from 'ag-grid-angular';
import { PhotosService } from './services/photos.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    HomeComponent,
    LeaderboardsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
