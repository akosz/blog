import { Box, Button, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'

const categories = [
    'Sport',
    'Helyi',
    'Tech',
];

const INITIAL_DATA = {
    title: "",
    subtitle: "",
    content: "",
    categories: []
}

export const Add = ({ news, handleChange: changeNews }) => {

    const [formData, setFormData] = useState(INITIAL_DATA);


    const handleChange = (event) => {
        const { target: { value } } = event;
        setFormData({ ...formData, ['categories']: typeof value === 'string' ? value.split(',') : value });
    };

    const handleClick = () => {
        const id = Math.max(...news.map((value) => value.id)) + 1;
        console.log(id);
        changeNews([ ...news, {
            id,
            ...formData
        }])
}

return (
    <>
        <Typography variant='h3'>Új hír felvétele</Typography>
        <Grid xs={12} mt={5} >
            <TextField
                fullWidth
                id="outlined-basic"
                label="Cím"
                variant="outlined"
                placeholder='Adja meg a hír címét...'
                value={formData.title}
                onChange={({ target: { value } }) => { setFormData({ ...formData, ['title']: value }) }}
            />
            <TextField
                style={{ marginTop: '10px' }}
                fullWidth
                id="outlined-multiline-static"
                label="Alcím"
                multiline
                rows={2}
                placeholder='Adja meg a hír alcímét...'
                value={formData.subtitle}
                onChange={({ target: { value } }) => { setFormData({ ...formData, ['subtitle']: value }) }}
            />
            <TextField
                style={{ marginTop: '10px' }}
                fullWidth
                id="outlined-multiline-static"
                label="Tartalom"
                multiline
                rows={10}
                placeholder='Adja meg a hír tartalmát...'
                value={formData.content}
                onChange={({ target: { value } }) => { setFormData({ ...formData, ['content']: value }) }}
            />
            <FormControl sx={{ mt: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Kategória</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={formData.categories}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Kategória" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    {categories.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button style={{ marginTop: 25 }} variant="contained" endIcon={<SendIcon />} onClick={() => handleClick()}>
                Felvétel
            </Button>
        </Grid>
    </>
)
}
