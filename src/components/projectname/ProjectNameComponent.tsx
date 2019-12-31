import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFeild from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';



export class ProjectNameComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Name your project </h1>
                    <TextFeild
                        hintText="Enter Your Project name"
                        floatingLabelText="Tuesdaycom Project"
                    />
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
export default ProjectNameComponent;