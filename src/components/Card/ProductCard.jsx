import axios from "axios";
import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FavouriteButton } from "./FavouriteButton";
import { useNavigate, useParams } from "react-router";

export const ProductCard = (props) => {
  const nav = useNavigate();
  const { pet, product, rootProps } = props;
  const { name, imageUrl } = product;
  const { id } = useParams();

  const editPet = async () => {
    nav(`/edit/${pet.id}`);
  };

  const deletePet = async () => {
    const result = await axios.delete(`http://localhost:3000/pets/${pet.id}`);

    nav("/adoption");
  };

  return (
    <Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Name: {pet.petName}
          </Text>
          <br />
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Birthday: {pet.dateOfBirth}
          </Text>
          <br />
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Breed: {pet.breed}
          </Text>
          <br />
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Microchip No.: {pet.microchipNo}
          </Text>
          <br />
        </Stack>
      </Stack>
      <Stack align="center">
        <Button variant="outline" width="full" onClick={editPet}>
          Edit
        </Button>
        <Button colorScheme="red" width="full" onClick={deletePet}>
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
