import React, { SyntheticEvent } from "react"
import { Link } from "react-router-dom";
import { Button, ThemeProvider, TextField } from "@material-ui/core";
import { User } from "../../models/user";

interface UserLoginComponentProps{
    user:User
    tuesdayLogin:(u:string,p:string)=>void
}


export class UserLoginComponent extends React.Component<UserLoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    submitLogin = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.tuesdayLogin(this.state.username, this.state.password)
    }

    render() {
        return (
            <div className="login">
                <ThemeProvider theme>
                    <React.Fragment>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" value={this.state.username} onChange={this.updateUsername} />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal" value={this.state.password} onChange={this.updatePassword} />
                            </div>
                        </form>
                        <Link to='/board'>
                            <Button variant="contained" color="primary">Next</Button>
                        </Link>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default UserLoginComponent