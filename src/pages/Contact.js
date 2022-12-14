import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleClick = () => {
        localStorage.setItem("message", JSON.stringify({name, email, message}));
    }

    return (
        <Grid container>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={9} justifyContent="center" container>
                <TextField id="outlined-basic" label="Név" variant="outlined" style={{ width: '100%', marginBottom: '20px' }}  onChange={(e) => setName(e.target.value)}/>

                <TextField id="outlined-basic" label="E-mail cím" variant="outlined" style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => setEmail(e.target.value)}/>

                <TextField id="outlined-basic" label="Üzenet" variant="outlined" multiline rows={5} style={{ width: '100%', marginBottom: '20px' }} 
                onChange={({target: {value}}) => setMessage(value)}/>
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => handleClick()}>Küldés</Button>
            </Grid>
        </Grid>
    )
}