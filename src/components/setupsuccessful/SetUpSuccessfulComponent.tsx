import React from "react"
import { Link } from "react-router-dom";
import { ThemeProvider, Button } from "@material-ui/core";

export class SetUpSuccessfulComponent extends React.Component {
    render() {
        return (
            <div className="setupSuccessful">
                <ThemeProvider theme>
                    <React.Fragment>
                        <h1>Yay!! Your first board is ready:)</h1>
                        <p>This is just the beginning! Continue building your workflow by</p>
                        <p>adding more projects, groups and tasks</p>
                        <Link to='/board'>
                            <Button variant="contained" color="primary">GO TO MY BOARD</Button>
                        </Link>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default SetUpSuccessfulComponent;