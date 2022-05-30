import { useState } from "react"

const UseInput =(validateState)=>{
    const[enteredValue,setEnteredValue]=useState('')
    const [isTouched,setIsTouched]=useState(false)

    const valueIsValed=validateState(enteredValue) //true||false (state.enteredValue
    const hasError=!valueIsValed&& isTouched

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler=(event)=>{
        setIsTouched(true)
    }
    return{
        value:enteredValue,
        isValid:valueIsValed,
        hasError,
        // hasError:hasError
        valueChangeHandler,
        inputBlurHandler

    }
}

export default UseInput