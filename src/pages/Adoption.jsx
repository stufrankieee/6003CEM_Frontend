import { Heading, Text, Stack, Container } from "@chakra-ui/react";
import CardList from "../components/Card/CardList";
import { getPets } from "../apis/petApi";
import { useQuery } from "react-query";

const Adoption = () => {
  const isLoggedIn = false;

  // Get All Pet API
  const searchBarCurrent = {};

  const {
    isSuccess: petIsSuccess,
    data: petData,
    refetch: petRefetch,
  } = useQuery({
    queryKey: [
      "pets",
      searchBarCurrent.petName,
      searchBarCurrent.dateOfBirth,
      searchBarCurrent.breed,
      searchBarCurrent.microchipNo,
      searchBarCurrent.gender,
      searchBarCurrent.intake,
      searchBarCurrent.remark,
      searchBarCurrent.introduction,
    ],
    queryFn: async () => {
      const pets = await getPets(
        searchBarCurrent.petName,
        searchBarCurrent.dateOfBirth,
        searchBarCurrent.breed,
        searchBarCurrent.microchipNo,
        searchBarCurrent.gender,
        searchBarCurrent.intake,
        searchBarCurrent.remark,
        searchBarCurrent.introduction
      );
      console.log(pets);

      return pets;
      // dispatch(setPets(pets));
    },
  });

  if (petData == null) return "";
  const petCardItems = petData.map((x) => (
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
      </Container>
      <CardList key={x.id} pet={x} />
    </>
  ));

  return petCardItems;
};

export default Adoption;
