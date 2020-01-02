import React from 'react'
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

export class ProjectNameComponent extends React.Component {
    render() {
        return (
            <div className="login">
                <ThemeProvider theme>
                    <React.Fragment>
                        <h1>Name your project</h1>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField id="outlined-basic" label="Project Name" variant="outlined" margin="normal" />
                            </div>
                        </form>
                        <Link to='/groupname'>
                            <Button variant="contained" color="primary">Next</Button>
                        </Link>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default ProjectNameComponent;