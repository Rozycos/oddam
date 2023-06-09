import React, {useReducer} from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();
    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          email: "",
          password: ""
        }
      );
    
    const { email, password } = inputsContent;
    
    const emailFormRules = /\S+@\S+\.\S+/;

    const emailForm = useForm({
        validate: (value) => emailFormRules.test(value) === false,

    });

    const passwordForm = useForm({
        validate: (value) => value.length <= 6,
    });

    const handleInputChange = e => {
        setInputsContent({
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (emailForm.error === true || passwordForm.error === true) {
            return alert("wpisz poprawne dane");
        } else if (emailForm.value === "" || passwordForm.value === "") {return alert ("wypełnij pole logowania");}
        
        else {
            console.log(password);
            const auth = getAuth();
                signInWithEmailAndPassword(auth, emailForm.value, passwordForm.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/oddaj-rzeczy");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage + email);
                            alert(
                                    `Your email or password is incorrect, please check your data, ${error}`
                                    )
                });
            //return console.log("kliknięto wyślij i wysłano formularz")
    
    };

    }

    return (
        <>
            {/* <LoginNavigation/> */}
            <Nav/>
            <section className="login">
                <h2>Zaloguj się</h2>
                <div className="login__column">
                    <form className="login__form">
                        <div className="login__form-field">
                            <label className="login__form-label">Email</label>
                            <input className="form__field-input" type="email" id="email" name="email" onChange={handleInputChange} {...emailForm} error=""/>    
                            <p className="form__field-error">{emailForm.error && "nieporawny email"} </p>
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Hasło</label>
                            <input className="form__field-input" type="password" id="password" name="password" onChange={handleInputChange} {...passwordForm} error=""/>        
                                        {/* <input className="form__field-input" type="email" id="email" name="email" placeholder="abc@xyz.pl" {...emailForm}/>
                                        <p className="form__field-error">{emailForm.error && "nieporawny email"} </p> */}
                            <p className="form__field-error">{passwordForm.error && "Minimum 6 znakow"} </p>            
                        </div>  
                    </form>
                </div>
                <div className="login__buttons">
                                    {/* <button className="form__submit-button" onClick={handleSubmit}>Wyślij</button> */}
                    <button className="login__button" ><Link className="login__nav" to="/rejestracja">Załóż konto</Link></button>
                    <button className="login__button login__button-active" onClick={handleSubmit}>Zaloguj się</button>
                </div>
            </section>
        </>
    )
}

export default Login;