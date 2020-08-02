export enum Language {
  PL = 'pl',
  EN = 'en'
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
}

