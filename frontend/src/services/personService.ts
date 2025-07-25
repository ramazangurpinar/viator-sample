// src/services/personService.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/persons';

export const getAllPersons = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
