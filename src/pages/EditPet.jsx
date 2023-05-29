import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const EditPet = () => {
  const nav = useNavigate();
  const [petName, setpetName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [breed, setbreed] = useState("");
  const [microchipNo, setmicrochipNo] = useState("");
  const [gender, setgender] = useState("");
  const [intake, setintake] = useState("");
  const [remark, setremark] = useState("");
  const [introduction, setintroduction] = useState("");

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/pets/${id}`).then((res) => {
      setpetName(res.data.petName);
      setdateOfBirth(res.data.dateOfBirth);
      setbreed(res.data.breed);
      setmicrochipNo(res.data.microchipNo);
      setgender(res.data.gender);
      setintake(res.data.intake);
      setremark(res.data.remark);
      setintroduction(res.data.introduction);
    });
  }, []);

  const submit = async () => {
    const result = await axios.patch(`http://localhost:3000/pets/${id}`, {
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
        <input
          type="text"
          value={petName}
          onChange={(e) => setpetName(e.target.value)}
        />
      </div>

      <div>
        <span>dateOfBirth</span>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setdateOfBirth(e.target.value)}
        />
      </div>

      <div>
        <span>breed</span>
        <input
          type="text"
          value={breed}
          onChange={(e) => setbreed(e.target.value)}
        />
      </div>

      <div>
        <span>microchipNo</span>
        <input
          type="text"
          value={microchipNo}
          onChange={(e) => setmicrochipNo(e.target.value)}
        />
      </div>

      <div>
        <span>gender</span>
        <input
          type="text"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        />
      </div>

      <div>
        <span>intake</span>
        <input
          type="text"
          value={intake}
          onChange={(e) => setintake(e.target.value)}
        />
      </div>

      <div>
        <span>remark</span>
        <input
          type="text"
          value={remark}
          onChange={(e) => setremark(e.target.value)}
        />
      </div>

      <div>
        <span>introduction</span>
        <input
          type="text"
          value={introduction}
          onChange={(e) => setintroduction(e.target.value)}
        />
      </div>

      <button onClick={submit}>submit</button>
    </>
  );
};

export default EditPet;
