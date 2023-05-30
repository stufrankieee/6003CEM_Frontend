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
import { useEffect, useState } from "react";
import { images } from "./_data";

export const ProductCard = (props) => {
  const nav = useNavigate();
  const { pet, rootProps } = props;
  const { id } = useParams();
  const [image, setImage] = useState("");
  const editPet = async () => {
    nav(`/edit/${pet.id}`);
  };

  const deletePet = async () => {
    const result = await axios.delete(`http://localhost:3000/pets/${pet.id}`);
    window.location.reload();
  };

  useEffect(() => {
    if (pet) {
      console.log(pet);
      const imgs = images.filter((x) => x.id == pet.id);

      if (imgs != null && imgs.length > 0) {
        setImage(imgs[0].imageUrl);
      }
    }
  }, [pet]);

  return (
    <Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${pet.petName} to your favourites`}
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
