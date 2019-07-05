import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Profile } from "../models/profile.model";
import { LeaderboardService } from "./leaderboard.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  public errorMessage: string;
  public successMessage: string;
  constructor(
    public db: AngularFirestore,
    public leaderboardService: LeaderboardService,
    public authService: AuthService
  ) {
    this.getLoggedInProfile();
  }
  loggedInProfile: Profile;
  addUpdateProfile(profile: Profile) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("leaderboard")
        .add(profile)
        .then(
          res => {
            resolve(res);
            this.errorMessage = "";
            this.successMessage = "Your account has been created";
          },
          err => {
            reject(err);
            this.errorMessage = err.message;
            this.successMessage = "";
          }
        );
    });
  }

  getLoggedInProfile() {
    this.loggedInProfile = this.leaderboardService.profiles$.find(
      x => x.email === this.authService.getEmail()
    );
  }
}
