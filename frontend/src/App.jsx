import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Clientes />} />
        </Routes>
    );
}

export default App;