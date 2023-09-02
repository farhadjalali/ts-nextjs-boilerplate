import { config } from "@/config";
import type { OptionalPick } from "@/types";
import { urlJoin } from "@/utils";
import {
  Product,
  ProductDto,
  mapFromProductDto,
  mostRecentProductTime,
} from "./products";

type CreatorDto = {
  id: string;
  email: string;
};

export type Creator = OptionalPick<CreatorDto> & { products: Product[] };

type Data = {
  Creators: CreatorDto[];
  Products: ProductDto[];
};

const retrieveData = async () => {
  const url = urlJoin(config.api.url, config.api.dataPath);
  const res = await fetch(url);
  const data: Data = await res.json();
  return data;
};

const retrieveCreators = async () => {
  const { Creators, Products } = await retrieveData();
  const products = Products.map(mapFromProductDto);
  return Creators.map((cto: CreatorDto) => mapFromDto(cto, products));
};

const mapFromDto = (dto: CreatorDto, products: Product[]) => {
  const creator: Creator = {
    id: dto.id,
    email: dto.email,
    products: products.filter((p) => p.creatorId === dto.id),
  };
  return creator;
};

const compareCreators = (a: Creator, b: Creator) => {
  if (a.products.length === b.products.length) {
    return mostRecentProductTime(a.products) > mostRecentProductTime(b.products)
      ? -1
      : 1;
  }
  return a.products.length > b.products.length ? -1 : 1;
};

export const getActiveCreators = async (top: number) => {
  const creators = await retrieveCreators();
  creators.sort(compareCreators);
  return creators.slice(0, top);
};
