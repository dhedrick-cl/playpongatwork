import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  currentMatch: Match;
  constructor() {
    this.currentMatch = {
      challenger: '',
      opponent: '',
      challengerScore: 0,
      opponentScore: 0,
      serving: '',
      gameCount: 0,
      totalGames: 3
    };
    /*this.currentMatch.challengerScore = 0;
    this.currentMatch.opponentScore = 0;
    this.currentMatch.totalGames = 3;
    this.currentMatch.gameCount = 0;
    this.currentMatch.serving = this.currentMatch.opponent;*/
  }
  addPoint(player: string) {
    if ('challenger' === player) {
      this.currentMatch.challengerScore++;
    }
    else {
      this.currentMatch.opponentScore++;
    }
  }
}
