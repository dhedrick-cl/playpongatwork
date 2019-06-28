import { Profile } from '../models/profile.model';

export interface Match {
  //challenger: Profile;
  //opponent: Profile;
  challenger: string;
  opponent: string;
  challengerScore: number;
  opponentScore: number;
  serving: string;
  gameCount: number;
  totalGames: number;
}
