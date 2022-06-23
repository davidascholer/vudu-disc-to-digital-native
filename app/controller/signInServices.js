import asyncStorage from './asyncStorage';

const getUser = async () => {
    const user = await asyncStorage.getDataObject();
    if (user)
      return user;
    else
      return null;
  }
  
  //Save the user object to the local storage and app context.
  const setUser = async user => {
  
    const result = await asyncStorage.storeDataObject(user);
  
    if (result.error)
      return { error: result.error }
  
    return { success: "Data saved." };
  }

const signOut = async () => {
    const result = await asyncStorage.removeDataObject();
}

const incrementAccountCount = () => {
  asyncStorage.incrementAccounts();
}

const getAccountQuantity = async () => {
    const accountQuantity = await asyncStorage.getAccountQuantity();
    return accountQuantity;
};

const forgotPassword = () => {

      let resultMsg = "email doesn't exist";
      alert("an email with a link to reset your password has been sent to " + JSON.stringify(email) );

}

module.exports = {
    setUser,
    getUser,
    signOut,
    forgotPassword,
    incrementAccountCount,
    getAccountQuantity
}