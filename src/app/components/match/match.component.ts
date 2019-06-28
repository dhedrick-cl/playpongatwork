import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(public matchService: MatchService) {
    this.matchService.currentMatch.challenger = 'Travis';
    this.matchService.currentMatch.opponent = 'Daniel';
    this.matchService.currentMatch.firstServe = 'Travis';
  }

  ngOnInit() {
    
  }

}
