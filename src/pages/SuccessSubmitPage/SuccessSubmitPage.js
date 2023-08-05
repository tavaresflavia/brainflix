import "./SuccessSubmitPage.scss";
import successIcon from "../../assets/icons/excellence.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SuccessSubmitPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, [navigate]);

  return (
    <div className="success">
      <img className="success__icon" src={successIcon} alt="success icon"></img>
      <h1 className="success__title">Thank you!</h1>
      <p className="success__text">Your submission has been sent.</p>
    </div>
  );
};

export default SuccessSubmitPage;
