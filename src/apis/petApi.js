import axios from "axios";
import { host } from "./../index";

export const getPetById = async (petId) => {
  const { data } = await axios.get(`${host}/pets?id=${petId}`);

  return data;
};

export const getPets = async (petName, breed) => {
  const { data } = await axios.get(`${host}/pets`, {
    params: {
      petName,
      breed,
    },
  });

  return data;
};

export const editPet = async (
  petId,
  petName,
  dateOfBirth,
  breed,
  microchipNo,
  gender,
  intake,
  remark,
  introduction,
  fileName
) => {
  const body = {
    petName: petName,
    dateOfBirth: dateOfBirth,
    breed: breed,
    microchipNo: microchipNo,
    gender: gender,
    intake: intake,
    remark: remark,
    introduction: introduction,
    imageFileName: fileName,
  };

  await axios.patch(`${host}/pets/${petId}`, body);
};

export const deletePet = async (petId) => {
  await axios.delete(`${host}/pets/${petId}`);
};
