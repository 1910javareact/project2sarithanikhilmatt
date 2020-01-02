import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextFeild from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export class GroupNameComponent extends React.Component {
    render(){
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Name you Group</h1>
                    <p>Organize your group by grouping task together</p>
                    <TextFeild  floatingLabelText="Things To Do" />   
                    <br />
                    <TextFeild floatingLabelText="Done" />  
                    <br />
                    <Link to="/addtask">
                        <RaisedButton label="Next" primary={true} style={styles.button}
                        />
                    </Link>
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default GroupNameComponent;
