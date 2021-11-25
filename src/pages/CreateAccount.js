import React, { useState, useContext } from "react";
import UserContext from "../context/Users/UserContext";
import CardBank from "../ui/Card";


const CreateAccount = () => {

    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(UserContext)


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
                    Email address:
                    <input 
                        type="input"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    /><br />
                </>
                ) : (
                <>
                    <h3>HOLA</h3>
                </>)}
        />
    )
}

export default CreateAccount;