import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is my Home Page</h1>
            
            {/* Button to navigate to the previous page */}
            <Link to="/previous">
                <button>Previous Page</button>
       
            </Link>
            
            {/* Button to navigate to the next page */}
            <Link to="/next">
                <button>Next Page</button>
            </Link>
        </div>
    );
}

export default Home;
