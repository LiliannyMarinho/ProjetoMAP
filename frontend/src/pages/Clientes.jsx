import React, { useEffect, useState } from 'react';

function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data));
    }, []);

    return (
        <div>
            <h1>Clientes</h1>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.IDCliente}>{cliente.Nome}</li>
                ))}
            </ul>
        </div>
    );
}

export default Clientes;