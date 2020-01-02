import React from "react"
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

export class GroupNameComponent extends React.Component {
    render(){
        return(
            <div className="login">
            <ThemeProvider theme>
                <React.Fragment>
                    <h1>Name your groups</h1>
                    <p>Organize your groups by grouping tasks together</p>
                    <form noValidate autoComplete="off">
                        <div>
                            <TextField id="outlined-basic" label="Things to do" variant="outlined" margin="normal" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Done" variant="outlined" margin="normal" />
                        </div>
                    </form>
                    <Link to='/addtask'>
                        <Button variant="contained" color="primary">Next</Button>
                    </Link>
                </React.Fragment>
            </ThemeProvider>
        </div>
        )
    }
}

export default GroupNameComponent;
