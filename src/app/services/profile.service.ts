import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(public db: AngularFirestore) {}

  addUpdateProfile(profile: Profile) {
    let setDoc = this.db.collection("leaderboard").add(profile);
  }
}
