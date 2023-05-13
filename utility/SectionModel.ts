import type { Product } from "./ProductModel";

export type Section = {
    name: string,
    image: string,
    items: Product[],
}