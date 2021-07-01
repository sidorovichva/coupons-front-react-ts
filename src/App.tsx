import React from 'react';
import './App.css';
import ThemeContextProvider from "./contexts/ThemeContext";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {

    return (
        <div className="App">
                <ThemeContextProvider>
                    <Header />
                    <Main />
                    <Footer />
                </ThemeContextProvider>
        </div>
    );
}

export default App;

// import React from 'react';
// import './App.css';
// import ThemeContextProvider from "./contexts/ThemeContext";
// //import Side from "./layout/Side";
// import Main from "./layout/Main";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//
// function App() {
//
//     return (
//         <div className="App">
//             <Router>
//                 <ThemeContextProvider>
//                     <Header />
//                     {/*<Side />*/}
//                     <Main />
//                     <Footer />
//                 </ThemeContextProvider>
//             </Router>
//         </div>
//     );
// }
//
// export default App;