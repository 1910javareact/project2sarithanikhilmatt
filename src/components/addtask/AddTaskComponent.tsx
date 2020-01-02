import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFeild from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

export class AddTaskComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    
                    <h1>Add Tasks </h1>
                    <p>Add your first two tasks</p>
                    <TextFeild
                        hintText="Enter Your Project name"
                        floatingLabelText="Project Propasal"
                    />
                    <br />
                    <TextFeild
                        // hintText="Enter Your Project name"
                        floatingLabelText="Login"
                    />
                    <br />
                    {/* <Button color='danger'>Next</Button> */}
                    <Link to="/setupsuccessful">
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
export default AddTaskComponent;