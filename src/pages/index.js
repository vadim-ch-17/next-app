import { useEffect, useState } from "react";
import Head from "next/head";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [myToken, setMyToken] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LdS4BYpAAAAAI7fSrk-dkWxGWwvlP53yZ0U_rk2";
    script.async = true;
    document.head.appendChild(script);
    setShowRecaptcha(true);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      // Виконати дії після успішної перевірки reCAPTCHA
      console.log("reCAPTCHA валідна. Виконую дії...");
    } else {
      // Попросити користувача пройти перевірку reCAPTCHA
      console.log("Будь ласка, підтвердьте, що ви не робот.");
    }
  };

  useEffect(() => {
    if (showRecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LdS4BYpAAAAAI7fSrk-dkWxGWwvlP53yZ0U_rk2", {
            action: "submit",
          })
          .then((token) => {
            setMyToken(token);
            // Тут можна виконати перевірку токену на сервері
            console.log("Token:", token);
            setIsVerified(true); // Це тимчасово, потрібно перевірити на сервері
          });
      });
    }
  }, [showRecaptcha]);

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?render=6LdS4BYpAAAAAI7fSrk-dkWxGWwvlP53yZ0U_rk2"></script>
      </Head>

      <h1 className="text-center font-extrabold">Home</h1>

      <form onSubmit={onSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </>
  );
};

export default Home;
