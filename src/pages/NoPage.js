import { Stack, Heading, Text, Container } from "@chakra-ui/react";

const NoPage = () => {
  return (
    <Container
      py={{
        base: "4",
        lg: "5",
      }}
    >
      <Stack spacing="5" justify="space-between">
        <Heading as="h2" size="xl">
          404
        </Heading>
        <Text fontSize="2xl">The page you requested could not be found.</Text>
      </Stack>
    </Container>
  );
};

export default NoPage;
