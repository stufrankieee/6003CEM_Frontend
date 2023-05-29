import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { products } from "./_data";
import { ProductGrid } from "./ProductGrid";

export const CardList = ({ pet, actions }) => {
  // if (pet == null) ? () : (<Box
  //   maxW="7xl"
  //   mx="auto"
  //   px={{
  //     base: "4",
  //     md: "8",
  //     lg: "12",
  //   }}
  //   py={{
  //     base: "6",
  //     md: "8",
  //     lg: "12",
  //   }}
  // >
  //   <ProductGrid>
  //     {products.map((product) => (
  //       <ProductCard key={product.id} product={product} />
  //     ))}
  //   </ProductGrid>
  // </Box>)

  if (pet == null) return "";

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <ProductCard
        pet={pet}
        key={products[0].id}
        product={products[0]}
      ></ProductCard>
      {/* <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid> */}
    </Box>
  );
};

export default CardList;
