import { useReducer } from 'react'

const inputsChangeHandler = (prevState, action) => {
	if (action.type === 'NAME_INPUT') {
		return {
			...prevState,
			nameIputValue: action.nameIputValue,
		}
	}
	if (action.type === 'BLUR_INPUT') {
		return {
			...prevState,
			isValid: action.isValid,
		}
	}
}

const UseInputReducer = (validateState) => {
	const [inputState, dispatchInputState] = useReducer(inputsChangeHandler, {
		nameIputValue: '',
		isValid: false,
	})
	const valueIsvaled = validateState(inputState.nameIputValue)
	const hasError = !valueIsvaled && inputState.isValid

	const valueChangeHandler = (event) => {
		dispatchInputState({
			type: 'NAME_INPUT',
			nameIputValue: event.target.value,
		})
	}

	const inputBlurHandler = () => {
		dispatchInputState({
			type: 'BLUR_INPUT', isValid:true
		})
	}
	return {
		value: inputState.nameIputValue,
		isValid: valueIsvaled,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
	}
}
export default UseInputReducer
