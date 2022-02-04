import React, { useState} from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        axios.post('http://localhost:3001/api/users/login', {
            email,
            password

        })
            .then((res) => {
                console.log(res.data.accessToken);
                localStorage.setItem("CC_Token", res.data.accessToken);
                navigate('/Listcategories');

            }).catch(error => {
                toast("Erreur de connexion");
            });
    }
    const handleSubmit = (event) => {
        console.log(`
        Email : ${email}
        Password : ${password}
        
        `);

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
                        onClick={() => { loginUser() }}

                    >
                        LogIn
                    </Button>
                </form>
          
        </Container>
    );
}
export default LogIn;