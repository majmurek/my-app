export enum Language {
  PL = 'pl',
  EN = 'en'
}

export enum ICON {
  UP = 'fa-angle-up',
  DOWN = 'fa-angle-down'
}

export interface Reservation {
  id: number;
  number: string;
}

export interface LostLuggage {
  id: number;
  number: number;
  delivery_price: number;
  date_end_auction: string;
  actual_price: number;
  buy_now_price: number;
  description: string;
  additional_info: string;
  delivery_term: string;
}

export interface RecommendedItems {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
