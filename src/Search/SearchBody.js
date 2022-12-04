import "./SearchBody.css"
import { StateProvider } from "./StateProvider";
import React, { useEffect, useState } from 'react';
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

function SearchBody(setPlaying, setImage, setTitle) {

  const searchClient = algoliasearch(
    "CTO885OKFS",
    "6ee5e446dfb9dd60ebaa8f3b9459f6ea"
  );

  const Hit = ({ hit }) => {
    const handleClick = () => {
       setImage(hit.image);
       setPlaying(hit.music);
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
    <div className='searchBody'>
      <div>
      <InstantSearch searchClient={searchClient} indexName="Music">
            <SearchBox className="search" translations={{placeholder: 'Search for music'}}/>
        <main>
          <Content/>
       </main>
      </InstantSearch>
      </div>
    </div>
  )
}

export default SearchBody