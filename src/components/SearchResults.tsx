import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishlist: (id: number) => void;
  totalPrice: number;
};

export function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultsProps) {
  return (
    <div>
      <h2>Valor total: R$ {totalPrice}</h2>

      {results.map((product) => (
        <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
      ))}
    </div>
  );
}
