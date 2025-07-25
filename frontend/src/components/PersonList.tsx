// src/components/PersonList.tsx
import React, { useEffect, useState } from 'react';
import { getAllPersons } from '../services/personService';

interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
}

const PersonList: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    getAllPersons().then(data => setPersons(data));
  }, []);

  return (
    <div>
      <h2>Person List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
