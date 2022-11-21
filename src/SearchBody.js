import "./SearchBody.css"
import Header from './Header'
import SongRow from './SongRow'
import React, { useEffect, useState } from 'react';
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

function SearchBody() {

    const searchClient = algoliasearch(
        "algolia id",
        "algolia key"
       );

    return (
      <div className='searchBody'>
        <Header/>
        <div>
        <InstantSearch searchClient={searchClient} indexName="Music">
             <SearchBox translations={{placeholder: 'Search for music'}}/>
             <Hits/>
        </InstantSearch>
        </div>
      </div>
    )
}

export default SearchBody