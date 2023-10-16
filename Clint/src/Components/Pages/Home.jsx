import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/Img/Home.png'


const Home = () => {
    return (
        <div>
          <div className="hero min-h-full lg:py-20 w-auto bg-base-200 lg:my-2 lg:mt-8 py-8">
            <div className="hero-content py-4 flex-col lg:flex-row-reverse">
             <figure>
              <img
              className="lg:max-w-lg max-w-full p-6 lg:p-0 rounded-lg shadow-4xl"
                src={Img}
              />
             </figure>
              <div className="w-full">
                <h1 className="text-5xl font-bold">Welcome to Frienemie <>!</></h1>
                <p className="py-6">
                  Frienemie is a web application. <br /> This web will provide you a cloud to Securely store your contract information. <br />Frinemie is 100% ad free, and secure.
                </p>
                <Link to="/dash" className="btn btn-accent">Your Contract</Link>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default Home;
