import { SetStateAction, useState, useEffect } from 'react';
import AOS from "aos"

interface Props{
  setEnregSuccess:React.Dispatch<SetStateAction<boolean>>
  setSignInModal: React.Dispatch<SetStateAction<boolean>>
  setSignUpModal:React.Dispatch<SetStateAction<boolean>>
}

const SignUp = (props: Props) => {
  const [username, setUsername] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [accountType, setAccountType] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')


   
  const handleRegister = async (e:React.SyntheticEvent) => {
      e.preventDefault()
      const terms: HTMLInputElement | null = document.querySelector('#terms') 
      const pseudoError: Element|null= document.querySelector('.pseudo.error')
      const emailError: Element|null = document.querySelector('.email.error')
      const passwordError: Element|null = document.querySelector('.password.error')
      const passwordConfirmError: Element|null = document.querySelector('.password-confirm.error')
      const emptyError: Element | null = document.querySelector(".empty.error")
      const termsError: Element | null = document.querySelector('.terms.error')
      let error :boolean = false
      

      if(emptyError && (username==="" || firstname==="" || password==="")){
        error = true
        emptyError.innerHTML = "Veuillez remplir tous les champs"
        setTimeout(()=>{
          emptyError.innerHTML = ""
        },6000)
      }

      if(password !== confirmPassword && passwordConfirmError && password !== ""){
        error = true
        passwordConfirmError.innerHTML = "Les mots de passes ne correspondent pas. Réessayer"
        setTimeout(()=>{
          passwordConfirmError.innerHTML = ""
        },6000)
      }   
      
      if(terms && !terms.checked && termsError){
        error = true
        termsError.innerHTML = "Veuillez valider les conditions générales..."
        setTimeout(()=>{
         termsError.innerHTML = ""
        },6000)
      }

      if(error !== true){

        //send Data to backend and wait for response
        props.setEnregSuccess(true)
        props.setSignUpModal(false)
        props.setSignInModal(true)

      }
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
    useEffect(()=>{
      AOS.init({
        duration:300
      }); 
      AOS.refresh();
    },[])
  return(
      <>            
        <div className="form" >
          <form action='' onSubmit={handleRegister} id="sign-up-form" data-aos="fade-right">
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
            <div className="firstname">
              <label htmlFor='firstname'>Firstname</label>
              <input 
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={(e)=>setFirstname(e.target.value)}
                  value={firstname}
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
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  value={confirmPassword}
              />
            </div>
            
            <input type="checkbox" id="terms"/>
            <label htmlFor="terms" id="term">J'accepte <a href="/" target="_blank"rel="noopener noreferrer">les conditions générales</a></label>
            <input type="submit" value="S'inscrire"/>
          </form>
        </div>
        <div className="error-grid">
            <div className="terms error"></div>
            <div className="password-confirm error"></div>
            <div className="empty error"></div>
            <div className="password error"></div>
        </div>
      </>                
  )
}

export default SignUp;