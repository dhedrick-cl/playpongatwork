import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { LeaderboardService } from "./services/leaderboard.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "playpongatwork";
  constructor(public leaderBoardService: LeaderboardService) {
    this.leaderBoardService.getProfiles();
  }
}
