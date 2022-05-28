import { useReducer} from 'react'



const inputChangeReducer = (prevState, action) => {
	if (action.type === 'ONE_INPUT') {
		return {
			...prevState,
			firstNameValue: action.firstNameValue,
			isValidOneInput: prevState.firstNameValue.length < 8,
		}
	}
	if (action.type === 'TWO_INPUT') {
		return {
			...prevState,
			lastNameInputValue: action.lastNameInputValue,
			isValidTwoInput: prevState.lastNameInputValue.length <9,
		}
	}
	if (action.type === 'THREE_INPUT') {
    // console.log(prevState.emailInputValue.includes('@'));
		return {
			...prevState,
			emailInputValue: action.emailInputValue,
			isValiThreeInput: prevState.emailInputValue.includes('@'),
		}
	}

	if (action.type === 'INPUTS_BLUR')
		return {
			...prevState,
			isValidOneInput: prevState.firstNameValue.length <8,
			isValidTwoInput: prevState.lastNameInputValue.length <9,
			isValiThreeInput: prevState.emailInputValue.includes('@'),
		}
	return prevState

}

const BasicForm = () => {
	const [inputState, dispatchInputState] = useReducer(inputChangeReducer, {
		isValidOneInput: '',
		firstNameValue: '',

		isValidTwoInput: '',
		lastNameInputValue: '',

		isValiThreeInput: '',
		emailInputValue: '',
	})


	const oneInput = (event) => {
		dispatchInputState({
			type: 'ONE_INPUT',
			firstNameValue: event.target.value,
		})
	}
	const twoInput = (event) => {
		dispatchInputState({
			type: 'TWO_INPUT',
			lastNameInputValue: event.target.value,
		})
	}
	const threeInput = (event) => {
		dispatchInputState({
			type: 'THREE_INPUT',
			emailInputValue: event.target.value,
		})
	}

	const validateIputsHandler = () => {
		dispatchInputState({
			type: 'INPUTS_BLUR',
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div
					className={`${['form-control']} ${
						inputState.isValidOneInput === false
							? ['form-control invalid']
							: ['form-control']
					}`}
				>
					<label htmlFor='name'>First Name</label>
					<input
						onChange={oneInput}
						type='text'
						id='name'
						onBlur={validateIputsHandler}
					/>
					 {!inputState.isValidOneInput && <p>Should not be more than eight characters</p>}
				</div>
				<div
					className={
						inputState.isValidTwoInput === false
							? ['form-control invalid']
							: 'form-control '
					}
				>
					<label htmlFor='name'>Last Name</label>
					<input
						onChange={twoInput}
						type='text'
						id='name'
						onBlur={validateIputsHandler}
					/>
					{!inputState.isValidTwoInput && <p>should not be more than nine characters</p>}
				</div>
			</div>
			<div
				className={
					inputState.isValiThreeInput === false
						? ['form-control invalid']
						: 'form-control '
				}
			>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					onChange={threeInput}
					type='text'
					id='name'
					onBlur={validateIputsHandler}
				/>
				{!inputState.isValidTwoInput && <p>Not entered @</p>}
			</div>
			<div className='form-actions'>
				<button >Submit</button>
			</div>
		</form>
	)
}

export default BasicForm


