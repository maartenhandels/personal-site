import './App.css';

import { useEffect } from "react";

import Content from "./components/Content/Content";

import ReactGA from 'react-ga';


const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className="App">
            <Content/>
        </div>
    );
}

export default App;
