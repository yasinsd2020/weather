
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search,setsearch]=useState('Delhi');
  const [city,setcity]=useState(null);
  
useEffect(() => {
const fetchapi=async ()=>{
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=137bb24e90c59d347b08d84cd95c8888`;
   const response =await fetch(url);
   const resJson =await response.json();
   
   setcity(resJson.main);
  }; 
  fetchapi();
}, [search]);
  
  return (
 <>
 <h1 className='h1'>Search Your City Temperature 🌡  </h1>
 <div className="container">

<div className="head">




<input type="search" placeholder='Enter city' onChange={(e)=>{setsearch(e.target.value)} }   />

<div className="disc">
{
!city? (<p>'no data is found'</p>):(<div> <div className="head1"><h2> <span>{search}</span></h2></div>
<div className="head2"><h1>{city.temp}</h1></div>
<div className="head2"><h3><span>Min:</span> {city.temp} |<span>Max: </span>{city.temp} </h3></div></div>)

 }
</div>

</div>



 </div>
 
 
 
 </>
 
  );
}

export default App;
