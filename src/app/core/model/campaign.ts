export interface Campaign {
  id: number;
  name: string;
  goal: number;
  currentAmount: number;
  imageUrl: string;
}

export interface Donor {
  name: string;
  amount: number;
}

export interface CampaignDetail extends Campaign {
  description: string;
  donors: Donor[];
}
