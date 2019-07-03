import { Injectable } from "@angular/core";
import { LeaderboardService } from "./leaderboard.service";
import { Observable } from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: "root"
})
export class ChallengeService {
  opponents: Profile[] = [];
  constructor(public leaderBoardService: LeaderboardService) {
    this.leaderBoardService.profiles.subscribe(results => {
      this.opponents = results;
    });
  }
}
