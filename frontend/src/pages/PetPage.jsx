import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetPage = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('/api/pets')
            .then(response => setPets(response.data))
            .catch(error => console.error('There was an error fetching the pets!', error));
    }, []);

    return (
        <div>
            <h1>Pets</h1>
            <ul>
                {pets.map(pet => (
                    <li key={pet.id}>{pet.name} - {pet.type} - {pet.age} anos</li>
                ))}
            </ul>
        </div>
    );
};

export default PetPage;
