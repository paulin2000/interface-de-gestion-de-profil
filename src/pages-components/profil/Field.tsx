import React from "react";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'

interface Props {
  fieldname: string;
  fieldState: boolean;
  label: string;
  fieldSetState: React.Dispatch<React.SetStateAction<boolean>>;
  fieldData: string;
  fieldDataState:React.Dispatch<React.SetStateAction<any>>;
  inputType: string;
}

const Field = (props: Props) => {
  const asterix: string = "*";
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [phoneValue, setPhoneValue] = useState<string>()

  const keyHandle = (e: any,setState: React.Dispatch<React.SetStateAction<boolean>>,state: boolean,fieldName: string,phoneInput:boolean = false,value:string ="") => {

    const postError: Element | null = document.querySelector("#error")
    if (e.key === "Enter") {
      console.log(e.target.value);
      console.log(fieldName)
      
      if (props.fieldname === "password" || props.fieldname==="address" || props.fieldname==="hobbies" || props.fieldname==="firstName" || props.fieldname==="lastName" || props.fieldname==="proffesion"){
        //send data to backend wihout control
        props.fieldDataState(e.target.value)
        setState(!state)
      }

      if(props.fieldname === "email" && postError){
        const validateEmail = (email:string) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
        if(validateEmail(e.target.value)){
          //send data to backend and update front
          props.fieldDataState(e.target.value)
          setState(!state)
        }else{
          postError.innerHTML= "Email invalide reéssayer"
          setTimeout(()=>{
            postError.innerHTML = ""
          },3000)
        }
      }

      if(props.inputType === "number" && phoneValue && postError){
        if(isValidPhoneNumber(phoneValue)){
          props.fieldDataState(phoneValue)
          setState(!state)
        }else{
          postError.innerHTML="Numero Incorrect. Réésayer..."
          setTimeout(()=>{
            postError.innerHTML=''
          },2000)
        }
      }
      //if username , send value to backend and verify that is not been taked by another user
      //and then update front with error or new username

      //const data =  {type: dataType, value: e.target.value}
      // send data to socket and update front<
    }
  };

  const InputType = (key:any)=>{

    switch (key) {
      case "text":
         return (
          <div className={props.fieldname}>
            <label htmlFor={props.fieldname}>{props.label}</label>
            {props.fieldState ? (
              <p >
                {props.fieldData}
                <span onClick={() => props.fieldSetState(!props.fieldState)}>&#9999;</span>
              </p>
            ) : (
              <div className="input">
                <input
                  id={props.fieldname}
                  type={props.inputType}
                  defaultValue={props.fieldData}
                  autoFocus
                  onBlur={() => props.fieldSetState(!props.fieldState)}
                  onKeyPress={(e) =>keyHandle(e,props.fieldSetState,props.fieldState,props.fieldname)}
                />
                <span id="error"></span>
              </div>
            )}
          </div>
         )
      case "password":
        return (
          <div className="password">
          <label htmlFor="">Password</label>
          {props.fieldState === true ? (
            <p>
              {asterix.repeat(props.fieldData.length)}
              <span onClick={() => props.fieldSetState(!props.fieldState)}>&#9999;</span>
            </p>
          ) : (
            <>
              {viewPassword === false ? (
                <>
                  <div className="modpassword">
                    <div className="input-view">
                      <input
                      type="password"
                      defaultValue={props.fieldData}
                      autoFocus
                      onKeyPress={(e) =>keyHandle(e,props.fieldSetState,props.fieldState,"password")}
                      />
                      <span onClick={() => setViewPassword(!viewPassword)}><i className="fa-solid fa-eye"></i></span>
                    </div>
                    {/* <span>Error password</span> */}
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    defaultValue={props.fieldData}
                    autoFocus
                    onKeyPress={(e) =>keyHandle(e,props.fieldSetState,props.fieldState,"password")}
                  />
                  <span onClick={() => setViewPassword(!viewPassword)}>
                  <i className="fa-solid fa-eye-slash"></i>
                  </span>
                </>
              )}
            </>
          )}
        </div>
        )
      case "number": 
        return (
          <div className={props.fieldname} >
            <label htmlFor={props.fieldname}>{props.label}</label>
            {props.fieldState ? (
              <p onClick={() => props.fieldSetState(!props.fieldState)}>
                {props.fieldData}<span>&#9999;</span>
              </p>
            ) : (
              <div className="input" onBlur={(e)=>console.log(e)}>
                <PhoneInput 
                  autoFocus
                  onKeyPress={(e:any) =>keyHandle(e,props.fieldSetState,props.fieldState,props.fieldname,true,phoneValue)}
                  defaultCountry="TG"
                  value={phoneValue}
                  onChange={setPhoneValue}
                />
              <span id="error"></span>
              </div>
            )}
          </div>
        )
      default:
            break

    }
  }

  return (
    <>
      {InputType(props.inputType)}
    </>
  );
};

export default Field;
