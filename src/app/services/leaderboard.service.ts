import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: "root"
})
export class LeaderboardService {
  profiles: Observable<any[]>;
  profiles$: Profile[] = [];
  constructor(public db: AngularFirestore) {}

  getProfiles() {
    this.profiles = this.db.collection("leaderboard").valueChanges();
    this.subToProfiles();
  }
  subToProfiles() {
    this.profiles.subscribe(results => {
      this.profiles$ = results;
    });
  }
}
