import React, { useState, useContext } from "react";
import { Button } from 'react-bootstrap';
import UserContext from "../context/Users/UserContext";
import CardBank from "../ui/Card";


const CreateAccount = () => {

    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(UserContext)
    
    const validate = (field, label) => {
        if(!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    
    const handleCreate = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        context.users.push({name, email, password, balance:100});
        setShow(false);
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <CardBank
            bgcolor="primary"
            txtcolor="white"
            status={status}
            header="Create Account"
            body={show ? (
                <>
                    Nane:<br />
                    <input 
                        type="input"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                    /><br />
                    Email address:<br />
                    <input 
                        type="input"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    /><br />
                    Password:<br />
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    /><br />
                    <Button type="submit" onClick={(e) => handleCreate(e)}>Create Account</Button>
                </>
                ) : (
                    <>
                        <h5>Success</h5>
                        <Button type="submit" onClick={clearForm}>Create Account</Button>
                    </>)
                }
        />
    )
}

export default CreateAccount;