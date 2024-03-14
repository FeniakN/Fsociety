import { useState } from "react";
import style from './styles/LofinForm.module.scss'
import { Link } from "react-router-dom";
import FastSingIn from "../FastSingIn/FastSingIn";

const RegistrationForm = () => {

    const [registrationData, setRegistrationData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        birthdate: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Тут логіка відправки даних на сервер
        // Наприклад, fetch або axios для відправки запиту
    };

    return (
        <>
            <h2 className={style.login__title}>Become a Sailor!</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input type="email" placeholder="Your email" id="email" name="email" required onChange={handleInputChange} />
                </label>
                <label htmlFor="nickname">
                    <input type="text" placeholder="Your nickname" id="nickname" name="nickname" required onChange={handleInputChange} />
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder="Your password" id="password" name="password" required onChange={handleInputChange} />
                </label>
                <label htmlFor="confirmPassword">
                    <input type="password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword" required onChange={handleInputChange} />
                </label>
                <input type="submit" value="Create an account" />
            </form>

            <FastSingIn/>

            <div className={style.recomendation}>
                <p>Already have an account ? <Link className={style.recomendation__link} to="/sing-in"><strong>Sign In</strong></Link></p>
            </div>

        </>
    );
}

export default RegistrationForm;
