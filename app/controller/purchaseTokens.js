import purchaseTokensAsync from "../model/crud/purchaseTokensAsync";

export default purchaseTokens = async (id, purchase) => {

    const errMsg = "Could not complete purchase.";

    if (purchase.transactionReceipt) {
        try {
            const result = await purchaseTokensAsync(id, purchase);

            if (result){
                if (result.ok)
                    return result;
                else
                    return { error: errMsg };
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    } else {
        return { error: errMsg };
    }

}