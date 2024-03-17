import axios from "axios";
import { AgifyData } from "../../../shared/types";
import { AGIFY_URL } from "../../constants";

export const getAgifyUser = async (name: string, signal: AbortSignal): Promise<AgifyData> => {
    try {
        const url = `${AGIFY_URL}?name=${name}`;
        const response = await axios.get(url, { signal })
        return response.data
    } catch (error) {
        throw error
    }
}