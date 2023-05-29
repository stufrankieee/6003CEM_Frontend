import axios from "axios";
import { useState } from "react";
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
      <div>
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

      <button onClick={submit}>submit</button>
    </>
  );
};

export default CreatePet;
