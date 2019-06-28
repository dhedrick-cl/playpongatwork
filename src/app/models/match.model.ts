import { Profile } from '../models/profile.model';

export interface Match {
  challenger: Profile;
  opponent: Profile;
  challengerScore: number;
  opponentScore: number;
  serving: string;
  gameCount: number;
  totalGames: number;
}
