
import React, { useState } from 'react'
import "./Home.scss"
import axios from "axios";
import { useEffect } from 'react';
import {Link} from  'react-router-dom'
import {BiPlay} from  'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const apikey= "7e5122f42b3d47b2f9c1deaf4e1d2214"
const url= "https://api.themoviedb.org/3"
const imgUrl= "https://image.tmdb.org/t/p/original/"
const upcoming= "upcoming";
const nowPlaying = "now_playing";
const popular= "popular";
const topRated= "top_rated";


const Card=({img})=>  <img  className='Card' src={img} alt="Not_available" /> ;

const Row =({title , arr=[{
      img:"https://imgcdn.ragalahari.com/july2021/designs/ramarao-on-duty-posters/ramarao-on-duty-posters2t.jpg"
  }]   }) => (
  
   <div className='Row'>
    
    <h2>{title}</h2>
    
    <div>
      {    arr.map( (item,index)=>(
           <Card  key={index} img={`${imgUrl}/${item.poster_path}`} /> 
             ) ) } 
      </div>
  
   </div>
);

const Home = () => {
        
        const [upcomingMovies, setUpcomingMovies ]=useState([])
        const [nowPlayingMovies, setNowPlayingMovies ]=useState([])
        const [popularMovies, setPopularMovies ]=useState([])
        const [topRatedMovies, setTopRatedMovies ]=useState([])
        const [genre, setMoviesGenre ]=useState([])
        useEffect(() => {
          const fetchUpcoming= async()=>{
           const {data : { results },}= await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}&page=2`);
          
           setUpcomingMovies(results);
          };
        
        
            const fetchNowPlaying= async()=>{
            const {data : { results },}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}&page=2`);
            
            setNowPlayingMovies(results);
          };
            
         
            const fetchPopular= async()=>{
            const {data : { results },}= await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=8`);
            
              setPopularMovies(results);
           };

          
            const fetchTopRated= async()=>{
            const {data : { results },
             }= await axios.get(`${url}/movie/${topRated}?api_key=${apikey}&page=5`);
            
              setTopRatedMovies(results);
           };
               
           
           const getAllGenre= async()=>{
            const {data : { genres },
           
             }= await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
            
              setMoviesGenre(genres);
           };

           getAllGenre(); 

           fetchUpcoming();
           fetchNowPlaying();
           fetchPopular();
           fetchTopRated();
        } ,[]);


  return (
      <section className="home">
        <div className="banner"
         style={{
          backgroundImage: popularMovies[1]?`url(${`${imgUrl}/${popularMovies[1].poster_path}`})`:"rgb(16,16,16)", 
        }} >

          {popularMovies[1] && <h1>{popularMovies[1].original_title}</h1>}
          {popularMovies[1] && <p>{popularMovies[1].overview}</p>}

          <div>
               <button>< BiPlay/> Play </button>
               <button> < AiOutlinePlus/> My List</button>
  
          </div>   
        
           
        </div> 
        <Row title={ "Upcoming Movies"} arr={upcomingMovies} />
        <Row title={ "Now Playing Movies"} arr={nowPlayingMovies} />
        <Row title={ "Popular Movies"} arr={popularMovies} />
        <Row title={ "Top Rated Movies"} arr={topRatedMovies} />

         <div className="genreBox">

           {genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`} >{item.name}</Link>
           ) ) }
         </div>
      </section>
  );

};

export default Home;