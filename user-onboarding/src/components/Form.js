import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormSchema from '../validation/FormSchema'


const Form = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    })

    const [users, setUsers] = useState([])

    const getData = () => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }
    
    const postData = newUser => {
        axios
            .post('https://reqres.in/api/users', newUser)
            .then(res => {
                console.log(res.data)
                setUsers([...users, res.data])

            })
    }

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        FormSchema.isValid(formState)
            .then((valid) => {
                setButtonDisabled(!valid)
            }, [formState])
    })

    const formSubmit = e => {
        e.preventDefault()
        axios
            .post('https://reqres.in/api/users', formState)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const inputChange = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({...formState, [e.target.name]: value})
    }

    return (
        <form onSubmit={formSubmit}>
            <h1>Onboarding Form</h1>
            <label htmlFor="name">
                Name:
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
            </label>
            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="password">
                Password:
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="terms">
                Terms and Conditions:
                <input 
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                />
            </label>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    )
}

export default Form