export interface IEXLargestTrade {
  venue: string;
  price: number;
  size: number;
}

export interface LargestTradeGroup {
  venue: string;
  avgPrice: number;
  size: number;
}
