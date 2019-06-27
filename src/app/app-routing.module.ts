import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'leaderboard', component: LeaderboardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
