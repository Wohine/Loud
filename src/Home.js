import React, { useEffect, useState } from 'react';
import "./Home.css"
import SearchBody from './SearchBody';
import Spiller from './Spiller';
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

export default function Home() {

  const [a, b] = useState(null)
  const [song, newsong] = useState(null)
  const [image, newimage] = useState(null)
  const [Image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [playing, setPlaying] = useState(null);

  const searchClient = algoliasearch(
    "CTO885OKFS",
    "6ee5e446dfb9dd60ebaa8f3b9459f6ea"
  );

  const Hit = ({ hit }) => {
    const handleClick = () => {
       setImage(hit.image);
       console.log("Image: " + Image);
       setPlaying(hit.music);
       console.log("Song: " + playing)
       setTitle(hit.name);
    };
      return (<div className="hit">
        <div className="artist" onClick={handleClick}>
          <img className="songImage" src={hit.image} alt=""/>
          <h4>{hit.name}</h4>
        </div>
      </div>)
    }

     const Content = () => {
      return(<div className="">
        <Hits hitComponent={Hit}/>
      </div>)
     }

  return (
    <div className='home'>
      <div className='searchBody'>
      <div className='searchResults'>
        <InstantSearch searchClient={searchClient} indexName="Music">
              <SearchBox  className="search" searchAsYouType={true} showLoadingIndicator translations={{placeholder: 'Search for music'}}/>
          <main>
            <Content/>
        </main>
        </InstantSearch>
      </div>
    </div>
      <Spiller title={title} play={playing} image={Image}/>
    </div>
  )
}