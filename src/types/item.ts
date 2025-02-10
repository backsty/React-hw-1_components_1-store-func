export type IItem = {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
};

export type ShopItemFuncProps = {
  item: IItem;
};
