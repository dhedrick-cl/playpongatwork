import { Component } from "@angular/core";
import { ProfileService } from "./services/profile.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "playpongatwork";
  constructor(public profileService: ProfileService) {
    this.profileService.getProfiles();
  }
}
