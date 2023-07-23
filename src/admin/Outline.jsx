import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

import MLIntro1A from '../section1/MLIntro1A';

const divStyle = {
    color:'black'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>Outline</h2>
                <main>        
                    <li>
                        <Link to="MLIntro1A">ML Introduction</Link>
                    </li>
                </main>
                <Routes>
                    <Route path="MLIntro1A" element={<MLIntro1A />} />
                </Routes>
            </div>
        )
    }
}



export default About;
