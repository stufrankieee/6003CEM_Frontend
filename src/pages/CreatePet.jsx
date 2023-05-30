import axios from "axios";
import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const CreatePet = () => {
  const nav = useNavigate();
  const [petName, setpetName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [breed, setbreed] = useState("");
  const [microchipNo, setmicrochipNo] = useState("");
  const [gender, setgender] = useState("");
  const [intake, setintake] = useState("");
  const [remark, setremark] = useState("");
  const [introduction, setintroduction] = useState("");

  const submit = async () => {
    const result = await axios.post("http://localhost:3000/pets", {
      petName,
      dateOfBirth,
      breed,
      microchipNo,
      gender,
      intake,
      remark,
      introduction,
    });

    nav("/adoption");
  };
  return (
    <>
      <Container
        maxW="lg"
        py={{
          base: "12",
          md: "24",
        }}
        px={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack spacing="8">
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: "xs",
                md: "sm",
              }}
            >
              Create pet profile for adoption?
            </Heading>
          </Stack>
          <Box
            py={{
              base: "0",
              sm: "8",
            }}
            px={{
              base: "4",
              sm: "10",
            }}
            bg={{
              base: "transparent",
              sm: "bg-surface",
            }}
            boxShadow={{
              base: "none",
              sm: "md",
            }}
            borderRadius={{
              base: "none",
              sm: "xl",
            }}
          >
            <Stack spacing="5">
              <FormControl>
                <FormLabel>Pet Name:</FormLabel>
                <Input
                  type="text"
                  value={petName}
                  onChange={(e) => setpetName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Birthday:</FormLabel>
                <Input
                  type="text"
                  value={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Breed:</FormLabel>
                <Input
                  type="text"
                  value={breed}
                  onChange={(e) => setbreed(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Microchip No.:</FormLabel>
                <Input
                  type="text"
                  value={microchipNo}
                  onChange={(e) => setmicrochipNo(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Gender:</FormLabel>
                <Input
                  type="text"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Intake:</FormLabel>
                <Input
                  type="text"
                  value={intake}
                  onChange={(e) => setintake(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Remark:</FormLabel>
                <Input
                  type="text"
                  value={remark}
                  onChange={(e) => setremark(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Introduction:</FormLabel>
                <Input
                  type="text"
                  value={introduction}
                  onChange={(e) => setintroduction(e.target.value)}
                />
              </FormControl>
              <Stack spacing="6">
                <Button variant="primary" onClick={submit}>
                  Update Cat Profile
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* <div>
        <span>petName</span>
        <input type="text" onChange={(e) => setpetName(e.target.value)} />
      </div>

      <div>
        <span>dateOfBirth</span>
        <input type="text" onChange={(e) => setdateOfBirth(e.target.value)} />
      </div>

      <div>
        <span>breed</span>
        <input type="text" onChange={(e) => setbreed(e.target.value)} />
      </div>

      <div>
        <span>microchipNo</span>
        <input type="text" onChange={(e) => setmicrochipNo(e.target.value)} />
      </div>

      <div>
        <span>gender</span>
        <input type="text" onChange={(e) => setgender(e.target.value)} />
      </div>

      <div>
        <span>intake</span>
        <input type="text" onChange={(e) => setintake(e.target.value)} />
      </div>

      <div>
        <span>remark</span>
        <input type="text" onChange={(e) => setremark(e.target.value)} />
      </div>

      <div>
        <span>introduction</span>
        <input type="text" onChange={(e) => setintroduction(e.target.value)} />
      </div>

      <button onClick={submit}>submit</button> */}
    </>
  );
};

export default CreatePet;
