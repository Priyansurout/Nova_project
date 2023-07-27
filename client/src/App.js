import './App.css';
import React,{useEffect, useState} from 'react'
import Homepage from './components/Homepage';
import MusicCardes from './components/MusicCardes';
import Navebar from './components/Navebar';
import Video from './components/Video';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SearchPage from './components/SearchPage';




let SPOTIFY_CLIENT_ID='9ae6c1ff96524a9d81a99c47cea8ec64'
let SPOTIFY_CLIENT_SECRET='7c4756b25bef449b9f7a54b5023a08bd'


function App() {

  const [accessToken, SetaccessToken] = useState("hi");
  const [data_art, Setdata] = useState([]);

  useEffect(() => {
  
    // API api token authentication
    var authParameter = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=` +  SPOTIFY_CLIENT_ID + `&client_secret=` + SPOTIFY_CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token',authParameter).then(data => data.json()).then(token => SetaccessToken(token.access_token))
    // console.log("we got our: ", accessToken);


  
  }, []);

  //let se_data = "Taylor Swift";
  async function search(name_of_art) {
    // let se_data = "Taylor Swift";
    console.log(`acces token is here: ` + accessToken);
    
    var aritesParameter = {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + accessToken
      }
    }

    let response = await fetch(`https://api.spotify.com/v1/search?q=${name_of_art}&type=album&limit=12&offset=5`,aritesParameter)
    let data = await response.json()
    Setdata(data.albums.items)
    return data_art
    console.log("here is our data check it out");
    
   }
  console.log(data_art);
  return (
    <>
    <Router>
    
      {/* <Navebar  search={search}/> */}
      <Navebar />

    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/search" element={<SearchPage search={search}  data_art={data_art}/>} />
    </Routes>

    {/* <div className='container my-100 mx-4'>
      <div className='row'>
      {data_art.map( element => {
          return <div className='container my-100 mx-4 col-md-4 my-3'>
              <MusicCardes  music_img={element.images[0].url} name_music={element.name} uri={element.uri} /> 
          </div>
      })} 
      </div>
    </div>
      */}


      
      
    
    </Router>
    </>
  );
}

export default App;
