import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./"

// Defining a thunk function
export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        //calling the action creation from the Slice using dispatch
        dispatch(checkingCredentials());

    }
}


export const startGoogleSingIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = signInWithGoogle();
        //If the result is not ok, dispatch this function ( created on slices)
        if(!result.ok) return dispatch(logout( result.errorMessage ))
        // If everything is oik on auth, do this
        dispatch(login(result))


    }
}



export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {
        
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password });

       if( !ok ) return dispatch(logout({ errorMessage }))

       dispatch(login({ uid, displayName, email, photoURL }))
    }
}