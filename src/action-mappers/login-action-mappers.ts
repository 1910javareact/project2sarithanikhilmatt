import { tuesdayLogin } from "../remote/tuesday-user"


export const tuesdayLoginTypes = {
    INVALID_CREDENTIALS: 'TUESDAY_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'TUESDAY_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'TUESDAY_LOGIN_FAILED_LOGIN'
}


export const uLogin = (username:string, password:string) => async (dispatch:any) => {
    try{
        let res = await tuesdayLogin(username, password)
        if(res.status === 200){
            dispatch({
                type:tuesdayLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:tuesdayLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:tuesdayLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}

