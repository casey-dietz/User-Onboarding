import React, {useState} from 'react';

const Form = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    })

    const formSubmit = e => {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name:
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    />
            </label>
            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                />
            </label>
            <label htmlFor="password">
                Password:
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                />
            </label>
            <label htmlFor="terms">
                Terms and Conditions:
                <input 
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formState.terms}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form