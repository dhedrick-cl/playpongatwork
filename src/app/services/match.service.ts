import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  challenger: Profile;
  opponent: Profile;
  constructor() { }
}
