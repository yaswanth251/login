// src/App.js

import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Simple Login App</h1>
            </header>
            <main>
                <LoginForm />
            </main>
        </div>
    );
}

export default App;
