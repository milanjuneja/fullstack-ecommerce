import { Deal } from "./DealTypes";

export interface HomeDate {
  id: number,
  grid: HomeCategory[],
  shopByCategories: HomeCategory[]
  electricCategories:HomeCategory[];
  deals:Deal[];
  dealCategories: HomeCategory[];
}

export interface HomeCategory {
  id?:number,
  categoryId: string,
  section?:  string,
  name?: string,
  image: string,
  parentCategoryId?: string
}