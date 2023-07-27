import React from 'react';
import "./Form.scss"
import Avatar from '../Avatar/Avatar.js';
import Button from '../Button/Button.js';

const Form = () => {
    return (
        <form className="form" id="form">
          <Avatar form={true}/>
            <div className= "form__input-box">
            <label className="form__label" htmlFor = "comment">
                JOIN THE CONVERSATION
            </label>
            <textarea
                name="comment" id="comment"
                className="form__input"
                placeholder="Add new comment">
            </textarea>
            <Button form={true}/>
            </div>
        </form>
            
    );
};

export default Form;