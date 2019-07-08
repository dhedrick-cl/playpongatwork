import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { MatchService } from "src/app/services/match.service";
import { Profile } from "../../models/profile.model";
import { ProfileService } from "src/app/services/profile.service";
@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styleUrls: ["./challenge.component.scss"]
})
export class ChallengeComponent implements OnInit {
  public challengeForm;
  constructor(
    public matchService: MatchService,
    public profileService: ProfileService
  ) {}

  ngOnInit() {
    this.challengeForm = new FormGroup({
      opponent: new FormControl("", Validators.required)
    });
  }

  onSubmit(form: NgForm) {
    let myopponent = this.challengeForm.get("opponent").value;
    this.matchService.opponent = myopponent;
    this.matchService.currentMatch.opponent = myopponent;
    this.matchService.challengeAccepted = true;
    //this.router.navigate(["search"]);
  }
  displayFn(opponent?: Profile): string | undefined {
    return opponent ? opponent.name + " aka " + opponent.nickname : undefined;
  }
}
