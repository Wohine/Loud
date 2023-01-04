import React, { Fragment, useState } from 'react';
import "../Styles/Home.css"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { db, auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from "firebase/firestore";
import 'reactjs-popup/dist/index.css';
import Footer from "./Footer"

export default function Home() {
/*
  const [a, b] = useState(null)
  const [song, newsong] = useState(null)
  const [image, newimage] = useState(null)
*/
  const [Image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [artist, setArtist] = useState(null);
  const [playlistName, setPlaylistName] = useState(null);

  const searchClient = algoliasearch(
    "CTO885OKFS",
    "6ee5e446dfb9dd60ebaa8f3b9459f6ea"
  );

  const Hit = ({ hit }) => {

    const handleClick = () => {
      setImage(hit.image);
      console.log("Image: " + Image);
      setPlaying(hit.music);
      console.log("Song: " + playing);
      setTitle(hit.name);
      setArtist(hit.artist);
    };

    const submitValues = async (event) => {

      const enteredName = prompt('What playlist should we add the song to?')
        setPlaylistName(enteredName)
        console.log(playlistName)
      
      if(enteredName) {
        const notify = () => toast("Song saved to playlist");
    
        const docData = {
          image: hit.image,
          name: hit.name,
          artist: hit.artist,
          song: hit.music
          
        }
        notify()
        setDoc(doc(db, "users", auth.currentUser?.uid, "media", "playlists", enteredName, hit.name), docData)
      } else {
        const notify = () => toast("Failed to save song to playlist!");
        notify()
        return
      }
      
    };
    
      return (
        <div className="hit">
          <AddBoxIcon className='hit__addSong' onClick={submitValues}/>
          <ToastContainer/>
          <div className="artist" onClick={handleClick}>
            <img className="songImage" src={hit.image} alt=""/>
            <h4>{hit.name}</h4>
            <h6>{hit.artist}</h6>
          </div>
        </div>
      )
    }

  const Content = () => {
    return(
      <div className="">
        <Hits hitComponent={Hit}/>
      </div>
    )
  }

  return (
      <Fragment>
        <div className='home'>
          <div className='searchBody'>
            <InstantSearch className="searchBox" searchClient={searchClient} indexName="Music">
                  <SearchBox className="search" searchAsYouType={true} translations={{placeholder: 'Search for music'}}/>
              <main className='searchBody__main'>
                <Content/>
              </main>
            </InstantSearch>
          </div>
          <div className='home__spillerDetails'>
            <h3>{title}</h3>
            <h2>{artist}</h2>
            <img className='home__spillerImage' src={Image} alt=""></img> 
          </div>
        </div>
        <Footer title={title} play={playing} image={Image} artist={artist}/>
    </Fragment>
  )
}