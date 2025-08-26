// footer.model.ts
export interface FooterItem {
  name: string;
  badge?: string;
  url?: string;
}

export interface FooterSection {
  title: string;
  items: FooterItem[];
}
