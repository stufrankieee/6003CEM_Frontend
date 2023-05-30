import {
  Heading,
  Text,
  HStack,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Box,
  Input,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import CardList from "../components/Card/CardList";
import { getPets } from "../apis/petApi";
import { useQuery } from "react-query";
import { useState } from "react";

const Adoption = () => {
  const isLoggedIn = false;
  const search = () => {
    setTime(new Date());
    petRefetch();
  };
  // Get All Pet API
  const [petNameSearch, setpetNameSearch] = useState("");
  const [breedSearch, setbreedSearch] = useState("");
  const [time, setTime] = useState("");
  const {
    isSuccess: petIsSuccess,
    data: petData,
    refetch: petRefetch,
  } = useQuery({
    queryKey: ["pets", time],
    queryFn: async () => {
      const pets = await getPets(petNameSearch, breedSearch);
      console.log(pets);

      return pets;
      // dispatch(setPets(pets));
    },
  });

  // Dropdown Menu

  // if (petData == null)
  //   return (
  //     <Box padding="6" boxShadow="lg" bg="white">
  //       <SkeletonCircle size="10" />
  //       <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
  //     </Box>
  //   );
  const petCardItems =
    petData == null ? [] : petData.map((x) => <CardList key={x.id} pet={x} />);

  return (
    <>
      <Container
        py={{
          base: "4",
          lg: "5",
        }}
      >
        <Stack spacing="5" justify="space-between">
          <Heading as="h2" size="xl">
            Cats for Adoption
          </Heading>
          <Text fontSize="2xl">
            One adoption saves two lives. Every time a lucky animal leaves our
            adoption center, a place will be vacated so that another animal can
            wait in the center to find a new home!
          </Text>
        </Stack>
        <HStack spacing={3}>
          <Input
            variant="outline"
            placeholder="Cat Name"
            value={petNameSearch}
            onChange={(e) => setpetNameSearch(e.target.value)}
          />
          <Input
            variant="outline"
            placeholder="Breed"
            value={breedSearch}
            onChange={(e) => setbreedSearch(e.target.value)}
          />
        </HStack>
        <button onClick={search}>search</button>
        <SimpleGrid columns={5} spacing={10}>
          {petCardItems}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Adoption;
