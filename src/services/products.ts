import type { OptionalPick } from "@/types";

export type ProductDto = {
  id: string;
  creatorId: string;
  createTime: string;
};

export type Product = OptionalPick<ProductDto, "id" | "creatorId"> & {
  createTime: Date;
};

export const mapFromProductDto = (product: ProductDto) => {
  const { createTime, ...rest } = product;
  const pr: Product = {
    ...rest,
    createTime: new Date(createTime),
  };
  return pr;
};

export const mostRecentProductTime = (products: Product[]) => {
  const times = products.map((p) => p.createTime.getTime());
  return Math.max(0, ...times);
};
