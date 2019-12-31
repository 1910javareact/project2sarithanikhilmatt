import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextFeild from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";

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
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}
                    />
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
