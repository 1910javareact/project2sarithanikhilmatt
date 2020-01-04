import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

export class HomeComponent extends React.Component {
    render() {
        return (
            <div className="fillWindow">
                <MuiThemeProvider>
                    <React.Fragment>
                        <br />
                        <Link to="/projectname">
                            <RaisedButton label="Start a Project!" primary={true} style={styles.button} />
                        </Link>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default HomeComponent;