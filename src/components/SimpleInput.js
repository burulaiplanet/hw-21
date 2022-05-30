import React from 'react';
// import UseInput  from '../utils/hooks/UseInput';
import UseInputReducer from '../utils/hooks/UseInputReducer';

const SimpleInput = (props) => {
  // alias
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,//pustoi emesbi ,onblur proverka
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler
  }=UseInputReducer((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler
  }  = UseInputReducer((value) => value.includes('@'));


  let formIsValid = false;
  if (enteredNameIsValid &&enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;//submittin proverkasy
    }
  };
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
    
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
       </div>
       <div className={emailInputClasses}>
       <label htmlFor='name'>Your Email</label>
        <input
          type='eamil'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
        />
        {emailInputHasError && <p>Name must not be empty</p>}
       </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;