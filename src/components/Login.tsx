import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import{useState} from 'react'

const Login = () => {
    const [signUpModal, setSignUpModal] = useState<boolean>(false)
    const [signInModal, setSignInModal] = useState<boolean>(true)

    const handleModals = (e:any) => {
        if (e.target.id === "register"){
            setSignInModal(false)
            setSignUpModal(true)
        }else if(e.target.id === 'login' ){
            setSignInModal(true)
            setSignUpModal(false)
        }
    }
  return (
      <div className="connection-form">
           <h1>Authentification</h1>
          <div className="form-container">
           
            <ul>
                <li onClick={handleModals} id="register" className={signUpModal? "active-btn": ""}>S'inscrire</li>
                <li onClick={handleModals} id="login" className={signInModal? "active-btn": ""}>Se connecter</li>
                </ul>
              {signUpModal && <SignUp/>}
              {signInModal && <SignIn/>} 
                
          </div>
      </div>
  );
};

export default Login;