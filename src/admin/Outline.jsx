import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import '../style.css';
import MLIntro1A from '../section1/MLIntro1A';
import { useAuth0 } from "@auth0/auth0-react";


const Outline = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated && (
        <div className='grid-item full-content content-grid'>
                <section className='grid-item-content ml-outline'>    
                        <h2>Outline</h2>   
                        <ol>
                            <li type="1">
                                <Link to="MLIntro1A">ML Introduction</Link>
                            </li>
                                <ol>
                                    <li type="A">
                                        Regression Overview
                                    </li>
                                    <li type="A">
                                        Classification Overview
                                    </li>
                                    <li type="A">
                                        Unsupervised Learning Overview
                                    </li>
                                </ol>
                            <li type="1">
                                Data and Data Cleaning for ML
                            </li>
                                <ol>
                                    <li type="A">
                                        Structures of Raw Data
                                    </li>
                                    <li type="A">
                                        Structuring Data For ML
                                    </li>
                                    <li type="A">
                                        Data Types and Characteristics
                                    </li>
                                </ol>
                            <li type="1">
                                Linear Models
                            </li>
                                <ol>
                                    <li type="A">
                                        Linear Regression Introduction
                                    </li>
                                    <li type="A">
                                        Linear Model Optimization
                                    </li>
                                    <li type="A">
                                        Generalized Linear Models
                                    </li>
                                    <li type="A">
                                        Extensions to Classification
                                    </li>
                                    <li type="A">
                                        Evaluating and Optimizing Models
                                    </li>
                                    <li type="A">
                                        Overfitting and the Bias-Variance Trade-Off
                                    </li>
                                    <li type="A">
                                        Regularization
                                    </li>
                                    <li type="A">
                                        Kernel Transforms for Linear Separation
                                    </li>
                                    <li type="A">
                                        Support Vector Machines
                                    </li>
                                </ol>
                        </ol>
                </section>
                <section className='grid-item-content ml-content'>    
                    <Routes>
                        <Route path="MLIntro1A" element={<MLIntro1A />} />
                    </Routes>
                </section>
            </div>
      )
    );
  };


export default Outline;
