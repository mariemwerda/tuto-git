import React, { useState} from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {

    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        axios.post('http://localhost:3001/api/users/', {
            nom,
            email,
            password

        })
            .then(() => {
            
                navigate('/logIn');

            }).catch(error => {
                toast("Erreur de connexion");
            });
    }
    
    const handleSubmit = (event) => {

        event.preventDefault();
    }


    return (
        <Container >
                <form  onSubmit={handleSubmit}>
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="nom"
                        label="nom"
                        name="nom"
                        autoComplete="nom"
                        autoFocus
                        onChange={e => setNom(e.target.value)}

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}

                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => { createUser() }}

                    >
                        SignIn
                    </Button>
                </form>
          
        </Container>
    );
}
export default SignIn;