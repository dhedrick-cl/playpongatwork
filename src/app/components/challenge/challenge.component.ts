import { Component, OnInit } from "@angular/core";
import { ChallengeService } from "src/app/services/challenge.service";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styleUrls: ["./challenge.component.scss"]
})
export class ChallengeComponent implements OnInit {
  constructor(public challengeService: ChallengeService) {}

  ngOnInit() {}
}
