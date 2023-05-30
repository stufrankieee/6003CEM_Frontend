import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { images } from "./_data";
import { ProductGrid } from "./ProductGrid";

export const CardList = ({ pet, actions }) => {
  if (pet == null) return "";

  return (
    <Box>
      <ProductCard pet={pet} key={pet.id} />
    </Box>
  );
};

export default CardList;
