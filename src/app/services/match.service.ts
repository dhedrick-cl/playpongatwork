import { Injectable } from "@angular/core";
import { Profile } from "../models/profile.model";
import { Match } from "../models/match.model";
import { ProfileService } from "./profile.service";
import { LeaderboardService } from "./leaderboard.service";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  currentMatch: Match;
  challengeAccepted: boolean = false;
  constructor(public profileService: ProfileService) {
    let myopponent: Profile;
    this.currentMatch = {
      challenger: this.profileService.loggedInProfile,
      opponent: myopponent,
      challengerScore: 0,
      opponentScore: 0,
      challengerServing: true,
      gameCount: 0,
      totalGames: 3,
      firstServe: "",
      numServes: 0,
      winner: null,
      loser: null,
      gameOver: false
    };
    /*this.currentMatch.challengerScore = 0;
    this.currentMatch.opponentScore = 0;
    this.currentMatch.totalGames = 3;
    this.currentMatch.gameCount = 0;
    this.currentMatch.serving = this.currentMatch.opponent;*/
  }
  addPoint(player: string) {
    this.currentMatch.numServes++;
    if ("challenger" === player) {
      this.currentMatch.challengerScore++;
    } else {
      this.currentMatch.opponentScore++;
    }
    if (
      this.currentMatch.challengerScore >= 11 &&
      this.currentMatch.challengerScore - this.currentMatch.opponentScore >= 2
    ) {
      this.finalizeGame(
        this.currentMatch.challenger,
        this.currentMatch.opponent
      );
    } else if (
      this.currentMatch.opponentScore >= 11 &&
      this.currentMatch.opponentScore - this.currentMatch.challengerScore >= 2
    ) {
      this.finalizeGame(
        this.currentMatch.opponent,
        this.currentMatch.challenger
      );
    }
    if (
      this.currentMatch.challengerScore + this.currentMatch.opponentScore >
      20
    ) {
      this.switchServe();
    } else if (this.currentMatch.numServes > 1) {
      this.switchServe();
      this.currentMatch.numServes = 0;
    }
  }

  switchServe() {
    this.currentMatch.challengerServing = !this.currentMatch.challengerServing;
  }

  finalizeGame(winner: Profile, loser: Profile) {
    console.log(winner);
    this.currentMatch.winner = winner;
    this.currentMatch.loser = loser;
    this.currentMatch.gameOver = true;
    this.currentMatch.winner.gamesplayed++;
    this.currentMatch.winner.gameswon++;
    this.currentMatch.loser.gamesplayed++;
    this.currentMatch.loser.gameslost++;
    this.profileService.updateProfile(this.currentMatch.winner);
    this.profileService.updateProfile(this.currentMatch.loser);
  }
}
