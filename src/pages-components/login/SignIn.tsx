import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

interface Props{
  enregSuccess: boolean;
}

const SignIn = (props: Props) => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

    const handleLogin = (e:React.SyntheticEvent) => {
      e.preventDefault()
      const signInError:Element | null = document.querySelector(".password.error")
        if ( signInError && (password==="" ||username === "")){
          signInError.innerHTML = "Veuillez remplir tous les champs"
          setTimeout(()=>{
            signInError.innerHTML = ""
          },3000)
        }else{
          //send Data to backend and wait for response
         window.location.href="/home"
          
        }
        
        // axios({
        //     method: "post",
        //     url: `http://localhost:5000/api/user/login`,
        //    // headers: {"Access-Control-Allow-Origin":"http://localhost:5000"},
        //     withCredentials: true,
        //     data: {
        //         email,
        //         password
        //     },
        // })
        //     .then((res)=>{
        //         if(res.data.error){
        //             signInError.innerHTML = res.data.error 
        //         }else {
        //             window.location="/"
        //         }
        //     })
        //     .catch((err)=>{
        //             console.log(err)
        //            console.log("catch : error de connexion")
        //     })
    }

  return (
    <div>
      <form action="" onSubmit={handleLogin} id="sign-in-form">
            {props.enregSuccess === true && <span id="success">Enregistrement Réussi... Connectez-vous</span>}
           <label htmlFor="username">Username / Email</label>
           <br />
           <input type="text" name="username" id="username"onChange={(e)=>setUsername(e.target.value)} value={username}/>
           <br />
           <label htmlFor="password">Password</label>
           <br />
           <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
           <div className="password error"></div>
           <input type="submit" value="Se connecter"/> 
       </form>
    </div>
  );
};

export default SignIn;