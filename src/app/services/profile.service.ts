import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Profile } from "../models/profile.model";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  public errorMessage: string;
  public successMessage: string;
  profiles: Observable<any[]>;
  profiles$: Profile[] = [];
  constructor(
    public firestore: AngularFirestore,
    public authService: AuthService
  ) {}

  getProfiles() {
    this.profiles = this.firestore.collection("profiles").valueChanges();
    this.subToProfiles();
  }
  getProfilesz() {
    return this.firestore.collection("profiles").valueChanges();
  }
  subToProfiles() {
    this.profiles.subscribe(results => {
      this.profiles$ = results;
    });
  }
  addProfile(profile: Profile) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("profiles")
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

  updateProfile(profile: Profile) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("profiles")
        .doc("8syH7eqVir6kyfOg0pJk")
        .set({ gamesplayed: 3, gameswon: 5 }, { merge: true })
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
    return this.profiles$.find(x => x.email === this.authService.getEmail());
  }
}
