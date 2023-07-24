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
                            <li type="1">
                                Non-Linear Models
                            </li>
                                <ol>
                                    <li type="A">
                                        Polynomial Regression
                                    </li>
                                    <li type="A">
                                        Custom Non-Linear Models
                                    </li>
                                    <li type="A">
                                        K-Nearest-Neighbors
                                    </li>
                                    <li type="A">
                                        Practical Use Cases of Non-Linear Models
                                    </li>
                                </ol>
                            <li type="1">
                                Tree Models
                            </li>
                                <ol>
                                    <li type="A">
                                        Decision Trees
                                    </li>
                                    <li type="A">
                                        Tree Regression Optimization
                                    </li>
                                    <li type="A">
                                        Tree Classification Optimization
                                    </li>
                                    <li type="A">
                                        Regularized Tree Models
                                    </li>
                                    <li type="A">
                                        Trees: What They Can and Cannot Do
                                    </li>
                                    <li type="A">
                                        Practical Use Cases of Tree Models
                                    </li>
                                </ol>
                            <li type="1">
                                Ensemble Models
                            </li>
                                <ol>
                                    <li type="A">
                                        Overview of Ensemble Models
                                    </li>
                                    <li type="A">
                                        Stacking, Bagging and Boosting
                                    </li>
                                    <li type="A">
                                        Bagging for Tree Regularization
                                    </li>
                                    <li type="A">
                                        Boosting Models
                                    </li>
                                    <li type="A">
                                        Customized Ensembles
                                    </li>
                                    <li type="A">
                                        Practical Use Cases of Ensembles Models
                                    </li>
                                </ol>
                            <li type="1">
                                Topic: Neural Network Basics
                            </li>
                                <ol>
                                    <li type="A">
                                        Perceptrons and Activation
                                    </li>
                                    <li type="A">
                                        Deep Networks and Back Propogation
                                    </li>
                                    <li type="A">
                                        Regularization for Neural Networks
                                    </li>
                                    <li type="A">
                                        Remarks on Generative Models and Embedding
                                    </li>
                                    <li type="A">
                                        Practical Use Cases of Neural Network Models
                                    </li>
                                </ol>
                            <li type="1">
                                Topic: Unsupervised Learning
                            </li>
                                <ol>
                                    <li type="A">
                                        Properties of Spatial Data
                                    </li>
                                    <li type="A">
                                        K-Means Clustering
                                    </li>
                                    <li type="A">
                                        Hierarchical Clustering
                                    </li>
                                    <li type="A">
                                        Dimension Reduction
                                    </li>
                                </ol>
                            <li type="1">
                                Topic: Natural Language Processing
                            </li>
                                <ol>
                                    <li type="A">
                                        Processing Text into ML Data
                                    </li>
                                    <li type="A">
                                        Comparing Similar Documents
                                    </li>
                                    <li type="A">
                                        Neural Networks: Token Embeddings
                                    </li>
                                    <li type="A">
                                        Sentiment Analysis
                                    </li>
                                    <li type="A">
                                        Topic Modeling
                                    </li>
                                    <li type="A">
                                        Naive Bayes Classification
                                    </li>
                                </ol>
                            <li type="1">
                                Topic: Image Processing
                            </li>
                                <ol>
                                    <li type="A">
                                        Processing Images into ML Data
                                    </li>
                                    <li type="A">
                                        Neural Networks: Convolution and Pooling
                                    </li>
                                    <li type="A">
                                        Object Detection
                                    </li>
                                    <li type="A">
                                        Practical Use Cases of Image Data
                                    </li>
                                </ol>
                            <li type="1">
                                ML Ops
                            </li>
                                <ol>
                                    <li type="A">
                                        What is an ML Pipeline?
                                    </li>
                                    <li type="A">
                                        Batch vs Online Inference
                                    </li>
                                    <li type="A">
                                        Git and Github Overview
                                    </li>
                                    <li type="A">
                                        Python Virtual Environments
                                    </li>
                                    <li type="A">
                                        Dockerized ML Projects
                                    </li>
                                    <li type="A">
                                        APIs for Model Serving
                                    </li>
                                    <li type="A">
                                        Cloud Services
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
