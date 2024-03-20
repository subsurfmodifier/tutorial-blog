import { useState } from 'react';

const Home = () => {
    const [name, setName ] = useState('mario');

    let name = 'mario';

    const handleClick = () => {
        name = 'luigi'
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;