/*
Calls a function in the model to try to get the user data when the user signs in. 
Called from the login screen.
*/
import getAccountAsync from "../model/crud/getAccountAsync";


export default getAccount = async (id, password) => {

    try {
        const user = await getAccountAsync(id, password);

        if (user) {
            if (user.ok)
                return user.data;
            else
                return { error: user.data };
        }

    } catch (error) {
        console.log('error: ' + error);
    }

}
