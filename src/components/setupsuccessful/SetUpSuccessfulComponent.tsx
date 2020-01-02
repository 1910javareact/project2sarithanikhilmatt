import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import { Link } from "react-router-dom";

export class SetUpSuccessfulComponent extends React.Component {
    render() {
        return (
            <div className="setupSuccessful">
                <MuiThemeProvider>
                    <React.Fragment>
                        <h1>Yay!! Your first board is ready:)</h1>
                        <p>This is just the beginning! Continue building your workflow by</p>
                        <p>adding more projects, groups and tasks</p>
                        <br />
                        <Link to="/board">
                            <RaisedButton label="Go to my board" primary={true} style={styles.button} />
                        </Link>
                        <br />  
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default SetUpSuccessfulComponent;