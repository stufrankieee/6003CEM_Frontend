import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme
);

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Link to="/adoption">
                    <Button>Adoption</Button>
                  </Link>
                  <Link to="/course">
                    <Button>Courses</Button>
                  </Link>
                  <Link to="/donate">
                    <Button>Donate</Button>
                  </Link>
                  {/* {["Adoption", "Courses", "Donate", "e-Shop"].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))} */}
                </ButtonGroup>
                <HStack spacing="3">
                  <Link to="/signin">
                    <Button variant="primary">Sign in</Button>
                  </Link>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
