import React, { useState } from 'react';
import useLogingStore from './LogingStore';
import airbeanLogo from '../image/airbean-logo.svg';
import '../style/loging.css';

function LoginForm() {
    const { fetchLoginList, setUsername, setEmail, setPassword } = useLogingStore();
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchLoginList(formData.username, formData.email, formData.password);
        setFormData(prevState => ({ ...prevState, password: '' }));
    };

    const toggleCheckbox = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className='bkg'>
        <div className="container">
            <img className='loginglogo' src={airbeanLogo} alt="logo" />
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Namn
                    <input type="text" name="username" placeholder="Email or Username" value={formData.username} onChange={handleChange} />
                </label>
                <label>
                    E-post
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Lösenord
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </label>
                <div className="group">
                    <input id="check" type="checkbox" className="check" checked={isChecked} onChange={toggleCheckbox} />
                    <label htmlFor="check"> GDRR Ok!</label>
                </div>
                <button type="submit">Brew me a cup!</button>
            </form>
        </div>
        </div>
    );
}

export default LoginForm;
