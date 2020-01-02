import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFeild from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

export class ProjectNameComponent extends React.Component {
    render() {
        return (
            <div className="projectName">  
                <MuiThemeProvider>
                    <React.Fragment>
                        <h1>Name your project</h1>
                        <TextFeild
                            hintText="Enter Your Project name"
                            floatingLabelText="Tuesdaycom Project"
                        />
                        <br />
                        <Link to="/groupname">
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
export default ProjectNameComponent;