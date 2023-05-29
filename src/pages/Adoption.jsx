import { Heading, Text, Stack, Container } from "@chakra-ui/react";
import CardList from "../components/Card/CardList";
import { getPets } from "../apis/petApi";
import { useQuery } from "react-query";

const Adoption = () => {
  const isLoggedIn = false;

  // Get All Pet API
  const pets = {};
  const searchBarCurrent = {};

  // const pets = useSelector(selectFavouritedPets);
  // const searchBarCurrent = useSelector(selectSearchCurrentValue);

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

  // if (petIsSuccess) {
  //   return JSON.stringify(petData);
  // } else {
  //   return "";
  // }

  // let petCardItems = [];

  // if (petIsSuccess) {
  //   if (isLoggedIn) {
  //     petCardItems = pets.map((x) => (
  //       <CardList
  //         key={x.id}
  //         pet={x}
  //         // onFavourite={onFavourite}
  //       />
  //     ));
  //   } else {
  //     petCardItems = pets.map((x) => <CardList key={x.id} pet={x} />);
  //   }
  // } else {
  //   petCardItems = "Loading...";
  // }

  if (petData == null) return "";
  const petCardItems = petData.map((x) => <CardList key={x.id} pet={x} />);

  return petCardItems;
  // Generate component with fill up the data from API response
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
      </Container>
      <CardList />
    </>
  );
};

export default Adoption;
