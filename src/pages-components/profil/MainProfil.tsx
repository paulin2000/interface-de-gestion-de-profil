import React, { useEffect } from 'react';
import {useState} from "react"
import { Push } from 'typescript';

const MainProfil = () => {
  const [file, setFile]= useState<File>()
  const [sendData, setSendData] =  useState<boolean>(false)
  const [modUsername, setUsername] = useState<boolean>(true)
  const [modFullname, setFullname] = useState<boolean>(true)
  const [modBirthday, setBirthday] = useState<boolean>(true)
  const [modAdress, setAdress] = useState<boolean>(true)
  const [modPassword, setPassword] = useState<boolean>(true)

  const keyHandle = (e:any, setState: React.Dispatch<React.SetStateAction<boolean>>, state:boolean, dataType:string)=>{
    if (e.key === "Enter"){
      setState(!state)
      const data =  {type: dataType, value: e.target.value}
      // send data to socket and update front<
      
    }
  }
  
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files !== null) {
      setFile(e.target.files[0])
   }
  }
  const handlePicture = (e:React.SyntheticEvent) => {
    e.preventDefault()
    setSendData(true)
  }

  useEffect(()=>{
    if (file!==null && sendData === true){
      //socket : send file to backend
    }
  },[sendData, file])

  return (
    <div className='main profil'>
      <h1>Profil</h1>
      <div className="profil-container">
        <div className="image-container">
          <img src="img/logo192.jpg" alt="pic" />
          <form action="" onSubmit={handlePicture} className="upload-pic">
            <div className="butons">
              <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={onChangeHandler}/>
              <button className='btn btn-secondary'>Changer d'image</button>
              <br/>
              <input type="submit" value="Envoyer"/>  
            </div>
        </form>
        </div>
        <div className="info-container">
          <div className="username">
            <label htmlFor="">Username</label>
            {modUsername === true?<p onClick={()=>setUsername(!modUsername)}>user.Username <span>&#9999;</span></p>:<input type="" defaultValue="user.Username" onKeyPress={(e)=>keyHandle(e, setUsername, modUsername, "username")}/>}
          </div>
          <div className="fullname">
            <label htmlFor="">Fullname</label>
            {modFullname === true?<p onClick={()=>setFullname(!modFullname)}>user.Fullname <span>&#9999;</span></p>:<input type="text"defaultValue="user.Fullame" onKeyPress={(e)=>keyHandle(e, setFullname,modFullname, "fullname")}/>}  
          </div>
          <div className="birthday">
            <label htmlFor="">Birthday</label>
            {modBirthday === true?<p onClick={()=>setBirthday(!modBirthday)}>user.Birthday <span>&#9999;</span></p>:<input type='date'defaultValue="user.Birthday" onKeyPress={(e)=>keyHandle(e,setBirthday,modBirthday,"birthday")}/>}
          </div>
          <div className="address">
            <label htmlFor="">Adress</label>
            {modAdress === true?<p onClick={()=>setAdress(!modAdress)}>user.Adress <span>&#9999;</span></p>:<input type="text"defaultValue="user.Adress" onKeyPress={(e)=>keyHandle(e,setAdress,modAdress,"adress")}/>}  
          </div>
          <div className="password">
            <label htmlFor="">Password</label>
            {modPassword === true?<p onClick={()=>setPassword(!modPassword)}>user.Password <span>&#9999;</span></p>:<input type="" defaultValue="user.Password" onKeyPress={(e)=>keyHandle(e,setPassword,modPassword,"password")}/>}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfil;