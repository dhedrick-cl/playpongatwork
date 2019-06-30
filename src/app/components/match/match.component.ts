import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  editMatch: boolean = false;
  gameOver: boolean = false;
  private editMatchForm;
  constructor(public matchService: MatchService) {
    this.matchService.currentMatch.challenger = 'Travis';
    this.matchService.currentMatch.opponent = 'Daniel';
    this.matchService.currentMatch.firstServe = 'Travis';
  }

  ngOnInit() {
    this.editMatchForm = new FormGroup({
      challengerName: new FormControl("", Validators.required),
      challengerScore: new FormControl("", Validators.required),
      opponentName: new FormControl("", Validators.required),
      opponentScore: new FormControl("", Validators.required),
    });
  }
  onSubmit(form: NgForm) {
    let challengerName = this.editMatchForm.get("challengerName").value;
    let challengerScore = this.editMatchForm.get("challengerScore").value;
    let opponentName = this.editMatchForm.get("opponentName").value;
    let opponentScore = this.editMatchForm.get("opponentScore").value;
    console.log('challenger name: ', challengerName, ' challenger score: ', challengerScore, 'opponent name: ', opponentName, ' oppponent score: ', opponentScore)
    // this.authService.login(email, password);
    //this.router.navigate(["search"]);

  }

}
