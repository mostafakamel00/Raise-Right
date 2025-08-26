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


export const defaultCampaignDetail = {
  id: 0,
  name: '',
  goal: 0,
  currentAmount: 0,
  imageUrl: '',
  description: '',
  donors: [{ name: '', amount: 0 }]
};
