import { Injectable } from "@angular/core";
import { Profile } from "../models/profile.model";
import { Match } from "../models/match.model";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  currentMatch: Match;
  gameOver: boolean = false;
  winner: string = "";
  challengeAccepted: boolean = false;
  constructor() {
    this.currentMatch = {
      challenger: "",
      opponent: "",
      challengerScore: 0,
      opponentScore: 0,
      challengerServing: true,
      gameCount: 0,
      totalGames: 3,
      firstServe: "",
      numServes: 0
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
      this.makeWinner(this.currentMatch.challenger);
    } else if (
      this.currentMatch.opponentScore >= 11 &&
      this.currentMatch.opponentScore - this.currentMatch.challengerScore >= 2
    ) {
      this.makeWinner(this.currentMatch.opponent);
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

  makeWinner(winner: string) {
    console.log(winner);
    this.winner = winner;
    this.gameOver = true;
  }
}
