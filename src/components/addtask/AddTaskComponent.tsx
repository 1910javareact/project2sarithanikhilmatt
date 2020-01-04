import React from 'react'
import { Link } from 'react-router-dom';
import { ThemeProvider, TextField, Button } from '@material-ui/core';

export class AddTaskComponent extends React.Component {
        render() {
            return (
                <div className="login">
                <ThemeProvider theme>
                    <React.Fragment>
                        <h1>Add tasks</h1>
                        <p>Add your first two tasks</p>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField id="outlined-basic" label="Project Proposal" variant="outlined" margin="normal" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Login Authentication" variant="outlined" margin="normal" />
                            </div>
                        </form>
                        <Link to='/setupsuccessful'>
                            <Button variant="contained" color="primary">Next</Button>
                        </Link>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default AddTaskComponent;