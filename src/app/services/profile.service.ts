import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Profile } from "../models/profile.model";
import { LeaderboardService } from "./leaderboard.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(
    public db: AngularFirestore,
    public leaderboardService: LeaderboardService,
    public authService: AuthService
  ) {
    this.getLoggedInProfile();
  }
  loggedInProfile: Profile;
  addUpdateProfile(profile: Profile) {
    let setDoc = this.db.collection("leaderboard").add(profile);
  }

  getLoggedInProfile() {
    this.loggedInProfile = this.leaderboardService.profiles$.find(
      x => x.email === this.authService.getEmail()
    );
  }
}
