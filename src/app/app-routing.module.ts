import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MatchComponent } from "./components/match/match.component";
import { HomeComponent } from "./components/home/home.component";
import { LeaderboardsComponent } from "./components/leaderboards/leaderboards.component";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "leaderboard",
    component: LeaderboardsComponent,
    canActivate: [AuthGuard]
  },
  { path: "create-profile", component: CreateProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "match", component: MatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
