import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  profiles: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.profiles = db.collection('leaderboard').valueChanges();
  }
}
