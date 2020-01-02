import React from "react"
import { Link } from "react-router-dom";
import { Button, ThemeProvider, TextField } from "@material-ui/core";

export class UserLoginComponent extends React.Component {
    render() {
        return (
            <div className="login">
                <ThemeProvider theme>
                    <React.Fragment>
                        <form noValidate autoComplete="off">
                            <div>
                            <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" />
                            </div>
                           
                            <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal" />
                            </div>
                        </form>
                        <Link to='/board'>
                            <Button variant="contained" color="primary">Next</Button>
                        </Link>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default UserLoginComponent