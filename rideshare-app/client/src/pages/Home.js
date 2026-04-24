import React, { useEffect, useState } from 'react';

function Home(){
  const [rides,setRides] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/rides')
    .then(res=>res.json())
    .then(data=>setRides(data));
  },[]);

  return (
    <div>
      <h1>Available Rides</h1>
      {rides.map(r=> (
        <div key={r._id}>
          <p>{r.source} → {r.destination}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
