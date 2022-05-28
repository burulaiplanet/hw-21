import { useReducer } from 'react'

const inputChangeReducer = (prevState, action) => {
	if (action.type === 'ONE_INPUT') {
		return {
			...prevState,
			firstNameValue: action.firstNameValue,
			isValidOneInput: action.firstNameValue.length < 8,
		}
	}
	if (action.type === 'TWO_INPUT') {
		return {
			...prevState,
			lastNameInputValue: action.lastNameInputValue,
			isValidTwoInput: action.lastNameInputValue.length < 9,
		}
	}
	if (action.type === 'THREE_INPUT') {
		return {
			...prevState,
			emailInputValue: action.emailInputValue,
			isValidThreeInput: action.emailInputValue.includes('@'),
		}
	}

	if (action.type === 'FIRST_BLUR')
		return {
			...prevState,
			isValidOneInput:
				prevState.firstNameValue.length > 0 &&
				prevState.firstNameValue.length < 8,
		}
	if (action.type === 'LASTNAME_BLUR')
		return {
			...prevState,

			isValidTwoInput:
				prevState.lastNameInputValue.length > 0 &&
				prevState.lastNameInputValue.length < 9,
		}
	if (action.type === 'EMAIL_BLUR')
		return {
			...prevState,
			isValidThreeInput: prevState.emailInputValue.includes('@'),
		}
	return prevState
}

const BasicForm = () => {
	const [inputState, dispatchInputState] = useReducer(inputChangeReducer, {
		isValidOneInput: true,
		firstNameValue: '',

		isValidTwoInput: true,
		lastNameInputValue: '',

		isValidThreeInput: true,
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

	const validateFirstHandler = () => {
		dispatchInputState({
			type: 'FIRST_BLUR',
		})
	}
	const validatelastNameHandler = () => {
		dispatchInputState({
			type: 'LASTNAME_BLUR',
		})
	}
	const emailBlurValidate = () => {
		dispatchInputState({
			type: 'EMAIL_BLUR',
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div
					className={
						inputState.isValidOneInput === false
							? 'form-control invalid'
							: 'form-control'
					}
				>
					<label htmlFor='name'>First Name</label>
					<input
						onChange={oneInput}
						type='text'
						id='name'
						onBlur={validateFirstHandler}
					/>
					{!inputState.isValidOneInput && (
						<p>Should not be more than eight characters</p>
					)}
				</div>
				<div
					className={
						inputState.isValidTwoInput === false
							? 'form-control invalid'
							: 'form-control '
					}
				>
					<label htmlFor='name'>Last Name</label>
					<input
						onChange={twoInput}
						type='text'
						id='name'
						onBlur={validatelastNameHandler}
					/>
					{!inputState.isValidTwoInput && (
						<p>should not be more than nine characters</p>
					)}
				</div>
			</div>
			<div
				className={
					inputState.isValidThreeInput === false
						? 'form-control invalid'
						: 'form-control '
				}
			>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					onChange={threeInput}
					type='text'
					id='name'
					onBlur={emailBlurValidate}
				/>

				{!inputState.isValidThreeInput && <p>Not entered @</p>}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
