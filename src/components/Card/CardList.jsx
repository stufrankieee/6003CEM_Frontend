import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { products } from "./_data";
import { ProductGrid } from "./ProductGrid";

export const CardList = ({ pet, actions }) => {
  if (pet == null) return "";

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard pet={pet} key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
    // <Box
    //   maxW="7xl"
    //   mx="auto"
    //   px={{ base: "4", md: "8", lg: "12" }}
    //   py={{ base: "6", md: "8", lg: "12" }}
    // >
    //   <ProductGrid>
    //     <ProductCard
    //       pet={pet}
    //       key={products[0].id}
    //       product={products[0]}
    //     ></ProductCard>
    //   </ProductGrid>
    // </Box>
  );
};

export default CardList;
