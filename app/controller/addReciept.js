/*
Calls a function in the model to try to get the user data when the user signs in. 
Called from the login screen.
*/
import addReceiptAsync from "../model/crud/addReceiptAsync";


export default addReceipt = async (id, receipt) => {

    try {
        const user = await addReceiptAsync(id, receipt);

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
