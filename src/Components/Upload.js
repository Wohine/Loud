import React, { Fragment } from "react";
import {db, storage} from "../firebase"
import "firebase/storage"
import "../Styles/Upload.css"
import Header from "./Header";
import 'firebase/storage';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { Await } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import Footer from "./Footer";

function Upload() {
  const [fileUrl, setFileUrl] = React.useState(null)
  const [musicUrl, setMusicUrl] = React.useState(null)
  const [disable, setDisable] = React.useState(true);
  const [progresspercent, setProgresspercent] = useState(0);
  const [musicName, setMusicName] = useState('');
  const [artistName, setArtistName] = useState('');

 React.useEffect(() => {
   if (musicUrl !== null && fileUrl !== null) {
     setDisable(false);
     console.log(disable)
   }
 },[musicUrl, fileUrl])

  const filechanged = async (e) =>{
      var file = e.target.files[0];
      const storageRef = ref(storage, `/Image/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
      (snapshot) => {
      },
      (error) => {
        alert(error);
      },
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL)
          console.log("FileUrl " + downloadURL);
        });
      }
    );
          
 }
  const musicchanged = async (e) =>{
      var music = e.target.files[0];
      const storageRef = ref(storage, `/Music/${music.name}`);
      const uploadTask = uploadBytesResumable(storageRef, music);
      
      uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMusicUrl ( downloadURL )
          console.log("MusicUrl " + downloadURL);
        });
      }
    );   
 }

  const handleChangeMusic = event => {
    setMusicName(event.target.value)
    console.log('value is:', event.target.value);
  }

  const handleChangeArtist = event => {
    setArtistName(event.target.value)
    console.log('value is:', event.target.value);
  }

  const submit =  (e) => {
    e.preventDefault();  
      const musicname = musicName;
      const docData = {
        name: musicName,
        music: musicUrl,
        image: fileUrl,
        artist: artistName
      }
      if (!musicname) {
        return
      } else {
        setDoc(doc(db, "Music", musicName), docData)
        
        alert("Music added")
      }

}
  return (
  <Fragment>
    <div className="upload">
      <form onSubmit={submit} className="music-form">
        <h1>UPLOAD MUSIC TO LOUD</h1>
        <input
          type="text"
          name=""
          placeholder="Song title"
          onChange={handleChangeMusic}
          required
        />
        <input
          type="text"
          name=""
          placeholder="Artist"
          onChange={handleChangeArtist}
          required
        />
        <label htmlFor="imageInput">images</label>
        <input
          type="file"
          className="imageInput"
          name="img"
          onChange={filechanged}
          required
        />
        <label htmlFor="musicInput">Music files</label>
        <input 
          className="musicInput"
          type="file" 
          name="music" 
          onChange={musicchanged} 
          required 
        />
        
        <button className="" onClick={submit} disabled={disable}>Submit</button>
      </form>
      
    </div>
    <Footer/>
  </Fragment>
 );
}
export default Upload