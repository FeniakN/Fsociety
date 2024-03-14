import { useState } from "react";
import style from "./styles/LofinForm.module.scss";
import { Link } from "react-router-dom";
import FastSignIn from "../FastSingIn/FastSingIn";
import axios from "axios";

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    birthdate: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Перевірка
    if (registrationData.password !== registrationData.confirmPassword) {
      console.error("Ти шо пароль не той ввів?");
      return;
    }

    try {
      const response = await axios.post(
        `https://socialnetword-fsociety.onrender.com/api/sipnup`,
        registrationData
      );

      if (!response) {
        throw new Error("Failed to register");
      }
      console.log("Registration successful:", response);
      setRegistrationData({
        email: "",
        password: "",
        confirmPassword: "",
        nickname: "",
        birthdate: "",
      });
    } catch (error) {
      console.error("Error submitting: ", error);
    }
  };

  return (
    <>
      <h2 className={style.login__title}>Become a Sailor!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Your email"
            id="email"
            name="email"
            value={registrationData.email}
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="nickname">
          <input
            type="text"
            placeholder="Your nickname"
            id="nickname"
            name="nickname"
            value={registrationData.nickname}
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Your password"
            id="password"
            name="password"
            value={registrationData.password}
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          <input
            type="password"
            placeholder="Confirm your password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="birthdate">
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={registrationData.birthdate}
            placeholder="Your birthdate"
            required
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Create an account" />
      </form>
      <FastSignIn />
      <div className={style.recommendation}>
        <p>
          Already have an account?
          <Link className={style.recommendation__link} to="/sign-in">
            <strong>Sign In</strong>
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationForm;
