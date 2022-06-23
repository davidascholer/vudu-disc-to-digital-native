
import fetchReceiptsAsync from '../model/crud/fetchReceiptsAsync';

export default fetchReceipts = async (id) => {

    try {
        const result = await fetchReceiptsAsync(id);

        if (result) {
            if (result.ok)
                return result.data;
            else
                return { error: result.data };
        }

    } catch (error) {
        console.log('error: ' + error);
    }

}
