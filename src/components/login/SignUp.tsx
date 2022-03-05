import React, { FormEventHandler } from 'react';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [fullname, setFullname] = useState<string>('')
  const [accountType, setAccountType] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [controlPassword, setControlPassword] = useState<string>('')

   
  const handleRegister = async (e:React.SyntheticEvent) => {
      e.preventDefault()
      const terms: HTMLInputElement | null = document.querySelector('#terms') 
      const pseudoError: Element|null= document.querySelector('.pseudo.error')
      const emailError: Element|null = document.querySelector('.email.error')
      const passwordError: Element|null = document.querySelector('.password.error')
      const passwordConfirmError: Element|null = document.querySelector('.password-confirm.error')
      const emptyError: Element | null = document.querySelector(".empty.error")
      const termsError: Element | null = document.querySelector('.terms.error')

      

      if(emptyError && (username==="" || fullname==="" || password==="")){
        emptyError.innerHTML = "Veuillez remplir tous les champs"
        setTimeout(()=>{
          emptyError.innerHTML = ""
        },6000)
      }

      if(password !== controlPassword || (terms && !terms.checked) ){
          if(password !== controlPassword && passwordConfirmError && password !== ""){

              passwordConfirmError.innerHTML = "Les mots de passes ne correspondent pas. Réessayer"
              setInterval(()=>{
                passwordConfirmError.innerHTML = ""
              },6000)
          }
          if(terms && !terms.checked && termsError){
              termsError.innerHTML = "Veuillez valider les conditions générales..."
              setTimeout(()=>{
                termsError.innerHTML = ""
              },6000)
          }
      }else{
      //     await axios({
      //         method:"post",
      //         url:`http://localhost:5000/api/user/register`,
      //         data: {
      //             pseudo,
      //             email,
      //             password,
      //         }
      //     })
      //         .then((res)=>{
      //             console.log(res.data)
      //             if(res.data.errors ){
      //                 pseudoError.innerHTML = res.data.errors.pseudo
      //                 emailError.innerHTML = res.data.errors.email
      //                 passwordError.innerHTML = res.data.errors.password
      //             }else{
      //                 setFormSubmit(true)
      //             }
      //         })
      //         .catch((err)=>console.log("erreur d'inscription"))
      // }
      }
    }
  return(
      <>            
          {formSubmit ?(
                  <>
                      {/* <SignInForm/> */}
                      <h4 className="success">Enrégistrement réussi Veuillez vous connecter</h4>
                  </>
              )
              :(
                  <>
                    <div className="form">
                    <form action='' onSubmit={handleRegister} id="sign-up-form">
                      <div className="username">
                        <label htmlFor='username'>Username / Email</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e)=>setUsername(e.target.value)}
                            value={username}
                        />
                      </div>
                      <div className="fullname">
                        <label htmlFor='fullname'>Fullname</label>
                        <input 
                            type="text"
                            name="fullname"
                            id="fullname"
                            onChange={(e)=>setFullname(e.target.value)}
                            value={fullname}
                        />
                      </div>
                      <div className="account-type">
                        <label htmlFor='account-type'>Account type</label>
                        <select name="account-type" id="account-type" value={accountType} onChange={(e)=>setAccountType(e.target.value)}>
                            <option value="Client">Client</option>
                            <option value="Partner">Partner</option>
                            <option value="Shipper">Shipper</option>
                            <option value="Admin">Admin</option>

                </select>
                      </div>
                      <div className="email error"></div>
                      <div className="password">
                        <label htmlFor='password'>Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                      </div>
                      <div className="password-conf">
                        <label htmlFor='password-conf'>Confirm Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="password-conf"
                            onChange={(e)=>setControlPassword(e.target.value)}
                            value={controlPassword}
                        />
                      </div>
                      
                      <input type="checkbox" id="terms"/>
                      <label htmlFor="terms" id="term">J'accepte <a href="/" target="_blank"rel="noopener noreferrer">les conditions générales</a></label>
                      <input type="submit" value="Valider les informations"/>
                      <div className="error-grid">
                        <div className="terms error"></div>
                        <div className="password-confirm error"></div>
                        <div className="empty error"></div>
                        <div className="password error"></div>
                      </div>
                    </form>
                    </div>
                  </>
      )}
  </>                
  )
}

export default SignUp;