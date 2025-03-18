import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { brandType } from "./brandType";
import { addressType } from "./addressType";
import { blockContentType } from "./blockContentType";
import { authorType } from "./authorType";
import { blogCategoryType } from "./blogCategoryType";
import { blogType } from "./blogType";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    productType,
    brandType,
    addressType,
    blockContentType,
    authorType,
    blogCategoryType,
    blogType,
    orderType,
  ],
};
