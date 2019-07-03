import { Profile } from "../models/profile.model";

export interface Match {
  //challenger: Profile;
  opponent: Profile;
  challenger: string;
  challengerScore: number;
  opponentScore: number;
  challengerServing: boolean;
  gameCount: number;
  totalGames: number;
  firstServe: string;
  numServes: number;
}
