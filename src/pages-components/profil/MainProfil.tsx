import React, { useEffect } from "react";
import { useState } from "react";
import Field from "./Field";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  adress: string;
  hobbies: string;
  username: string;
  id: string;
  gender: string;
  proffesion: string;
  whastsappNumber: string;
  identityCard: string;
}

const MainProfil = () => {
  const [file, setFile] = useState<File>();
  const [sendData, setSendData] = useState<boolean>(false);
  const [modUsername, setUsername] = useState<boolean>(true);
  const [usernameData, setUsernameData] = useState<string>("FGFG")
  const [modFirstname, setFirstname] = useState<boolean>(true);
  const [firstnameData, setFirstnameData] = useState<string>("")
  const [modLastname, setLastname] = useState<boolean>(true);
  const [lastnameData, setLastnameData] = useState<string>('')
  const [modBirthday, setBirthday] = useState<boolean>(true);
  const [birthdayData, setBirthdayData] = useState<string>('')
  const [modAdress, setAdress] = useState<boolean>(true);
  const [adressData, setAdressData] = useState<string>('')
  const [modPassword, setPassword] = useState<boolean>(true);
  const [passwordData, setPasswordData] = useState<string>('zerrzer')
  const [modEmail, setEmail] = useState<boolean>(true);
  const [emailData, setEmailData] =useState<string>("")
  const [modPhoneNumber, setPhoneNumber] = useState<boolean>(true);
  const [phonenumberData, setPhonenumberData] = useState<string>("")
  const [modHobbies, setHobbies] = useState<boolean>(true);
  const [hobbiesData, setHobbiesData] = useState<string>('')
  const [modProfession, setProfession] = useState<boolean>(true);
  const [professionData, setProfessionData] = useState<string>('')
  const [modWhatsappNumber, setWhatsappNumber] = useState<boolean>(true);
  const [whatsappnumberData, setWhatsappnumberData] = useState<string>("")
  const [modIdentityCard, setIdentityCard] = useState<boolean>(true);
  const [identitycardData, setIdentitycardData] = useState<string>("")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
    }
  };
  const handlePicture = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSendData(true);
  };

  useEffect(() => {
    if (file !== null && sendData === true) {
      //socket : send file to backend
    }
  }, [sendData, file]);

  useEffect(()=>{
    //get userInfo to backend
  },[])

  return (
    <div className="main profil">
      <div className="profil-container">
        <div className="image-container">
          <img src="img/logo192.jpg" alt="pic" />
          <form action="" onSubmit={handlePicture} className="upload-pic">
            <div className="butons">
              <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={onChangeHandler}
              />
              <button className="btn btn-secondary">Changer d'image</button>
              <br />
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </div>

        <div className="info-container">
          <Field
            fieldname="username"
            label="Username"
            fieldState={modUsername}
            fieldSetState={setUsername}
            fieldData={usernameData}
            fieldDataState={setUsernameData}
            inputType="text"

          />
          <Field
            fieldname="firstName"
            label="First Name"
            fieldState={modFirstname}
            fieldSetState={setFirstname}
            fieldData={firstnameData}
            fieldDataState={setFirstnameData}
            inputType="text"
          />
          <Field
            fieldname="lastName"
            label="Last Name"
            fieldState={modLastname}
            fieldSetState={setLastname}
            fieldData={lastnameData}
            fieldDataState={setLastnameData}
            inputType="text"
          />
          <Field
            fieldname="email"
            label="Email"
            fieldState={modEmail}
            fieldSetState={setEmail}
            fieldData={emailData}
            fieldDataState={setEmailData}
            inputType="text"
          />
          <Field
            fieldname="password"
            label="Password"
            fieldState={modPassword}
            fieldSetState={setPassword}
            fieldData={passwordData}
            fieldDataState={setPasswordData}
            inputType="password"
          />
          <Field
            fieldname="phoneNumber"
            label="Phone Number"
            fieldState={modPhoneNumber}
            fieldSetState={setPhoneNumber}
            fieldData={phonenumberData}
            fieldDataState={setPhonenumberData}
            inputType="number"
          />
          <Field
            fieldname="whatsappNumber"
            label="Whatsapp Number"
            fieldState={modWhatsappNumber}
            fieldSetState={setWhatsappNumber}
            fieldData={whatsappnumberData}
            fieldDataState={setWhatsappnumberData}
            inputType="number"
          />
          <Field
            fieldname="address"
            label="Adress"
            fieldState={modAdress}
            fieldSetState={setAdress}
            fieldData={adressData}
            fieldDataState={setAdressData}
            inputType="text"
          />
          <Field
            fieldname="birthday"
            label="Birthday"
            fieldState={modBirthday}
            fieldSetState={setBirthday}
            fieldData={birthdayData}
            fieldDataState={setBirthdayData}
            inputType="date"
          />
          <Field
            fieldname="hobbies"
            label="Hobbies"
            fieldState={modHobbies}
            fieldSetState={setHobbies}
            fieldData={hobbiesData}
            fieldDataState={setHobbiesData}
            inputType="text"
          />

          <Field
            fieldname="proffesion"
            label="Profession"
            fieldState={modProfession}
            fieldSetState={setProfession}
            fieldData={professionData}
            fieldDataState={setProfessionData}
            inputType="text"
          />
          <Field
            fieldname="identityCard"
            label="Identity Card"
            fieldState={modIdentityCard}
            fieldSetState={setIdentityCard}
            fieldData={identitycardData}
            fieldDataState={setIdentitycardData}
            inputType="text"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProfil;
