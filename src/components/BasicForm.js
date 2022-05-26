import {  useReducer,useState,useEffect } from "react";



const inputChangeReducer=(prevState,action)=>{
  if(action.type==='ONE_INPUT'){
    return{
...prevState,
firstNameValue:action.firstNameValue,
isValidOneInput:prevState.firstNameValue.trim().length>8,
    }
  }
  if(action.type==='TWO_INPUT'){
    return{
...prevState,
lastNameInputValue:action.lastNameInputValue,
isValidTwoInput:prevState.lastNameInputValue.trim().length>9,
    }
  }
  if(action.type==='THREE_INPUT'){
    return{
...prevState,
emailInputValue:action.emailInputValue,
isValiThreeInput:prevState.emailInputValue.includes('@')
    }
   
  }

if(action.type==='INPUT_BLUR')
return{
  ...prevState,
  isValidOneInput:prevState.firstNameValue.trim().length>8,
  isValidTwoInput:prevState.lastNameInputValue.trim().length>9,
  isValiThreeInput:prevState.emailInputValue.includes('@')
}
return {
  isValidOneInput:'',
  firstNameValue:'',

  isValidTwoInput:'',
  lastNameInputValue:'',

  isValiThreeInput:'',
  emailInputValue:'',
}
}

const BasicForm = () => {

const [inputState,dispatchInputState]=useReducer(inputChangeReducer,{
  isValidOneInput:'',
  firstNameValue:'',

  isValidTwoInput:'',
  lastNameInputValue:'',

  isValiThreeInput:'',
  emailInputValue:'',

})



const [inputIsValid,setInputValid]=useState(false)


 useEffect(()=>{
   if(inputState.firstNameValue.trim().length>8 && inputState.lastNameInputValue.trim().length>9 && inputState.emailInputValue.includes('@')){
    setInputValid(true)
   }else{
     setInputValid(false)
   }
 },[inputState.firstNameValue, inputState.lastNameInputValue,inputState.emailInputValue])

const oneInput=(event)=>{
  dispatchInputState({
    type:'ONE_INPUT',
    firstNameValue:event.target.value,
  })
}
const twoInput=(event)=>{
  dispatchInputState({
    type:'TWO_INPUT',
   lastNameInputValue:event.target.value,
  })
}
const threeInput=(event)=>{
  dispatchInputState({
    type:'THREE_INPUT',
   emailInputValue:event.target.value,
  })
}

const validateIputsHandler=()=>{
  dispatchInputState({
    type:"INPUTS_BLUR",
    
  })

}

 const submitHandler=(event)=>{
   event.preventDefault()
  
 }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={inputState.isValidOneInput===false?['form-control invalid']:'form-control '}>
          <label htmlFor='name'>First Name</label>
          <input  onChange={oneInput} type='text' id='name' onBlur={validateIputsHandler}  />
        </div>
        <div className={inputState.isValidTwoInput===false?['form-control invalid']:'form-control '}>
          <label htmlFor='name'>Last Name</label>
          <input  onChange={twoInput} type='text' id='name' onBlur={validateIputsHandler}  />
        </div>
      </div>
      <div className={inputState.isValiThreeInput===false?['form-control invalid']:'form-control '}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={threeInput} type='text' id='name' onBlur={validateIputsHandler} />
      </div>
      <div className='form-actions'>
        <button  disabled={!inputIsValid}>Submit</button>
      </div>
    </form> 
  );
};

export default BasicForm;
