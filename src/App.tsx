import React from 'react';
import './App.css';
import ThemeContextProvider from "./contexts/ThemeContext";
//import Side from "./layout/Side";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {

    return (
        <div className="App">
            <ThemeContextProvider>
                <Header />
                {/*<Side />*/}
                <Main />
                <Footer />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
