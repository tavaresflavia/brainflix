import  "./Button.scss"

const Button = ({location,iconSrc,altText,innerText}) => {

        return (
            <div className= {`button button--${location}`}>
                <img className = "button__icon" src={iconSrc} alt= {altText} /> {innerText}
            </div>
        );

    };

export default Button;