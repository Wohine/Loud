import React from "react";
import {db, storage} from "./firebase"
import "firebase/storage"
import "./Upload.css"
import Header from "./Header";
import 'firebase/storage';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

function Upload() {
  const [fileUrl, setFileUrl] = React.useState(null)
  const [musicUrl, setMusicUrl] = React.useState(null)
  const [disable, setDisable] = React.useState(true);
  const [progresspercent, setProgresspercent] = useState(0);

 React.useEffect(() => {
   if (musicUrl !== null && fileUrl !== null) {
     setDisable(false);
     alert("click on submit")
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
          console.log("FileUrl " + fileUrl);
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
          setMusicUrl( downloadURL )
          console.log("MusicUrl " + musicUrl);
        });
      }
    );   
 }
const submit =  (e) => {
   e.preventDefault();  
     const musicname = e.target.musicname.value;
     if (!musicname) {
       return
     }
     db.collection("Music").doc(musicname).set({
       name: musicname,
       music: musicUrl,
       image: fileUrl
     })
     alert("Music added") 
}
  return (
    <div className="upload">
      <form onSubmit={submit} className="">
        <label>images</label>
        <input
          type="file"
          className=""
          name="img"
          onChange={filechanged}
          required
        />
        <label>Music files</label>
        <input type="file" name="music" onChange={musicchanged} required />
        <input
          type="text"
          name="musicname"
          placeholder="Music name"
          required
        />
        <button className="" onClick={submit} disabled={disable} >Submit</button>
      </form>
    </div>
 );
}
export default Upload