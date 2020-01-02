import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextFeild from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export class UserLoginComponent extends React.Component {
    render(){
        return(
          <div className="login">
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Login</h1>
                    <TextFeild  floatingLabelText="e-mail" />   
                    <br />
                    <TextFeild floatingLabelText="password" />  
                    <br />
                    <Link to="/addtask">
                        <RaisedButton label="Next" primary={true} style={styles.button} />
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

export default UserLoginComponent