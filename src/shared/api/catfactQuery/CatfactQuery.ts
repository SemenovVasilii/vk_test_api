import axios from "axios";
import { CatfactData } from "../../../shared/types";
import { FACTS_URL } from "../../constants";

export const getCatfact = async (): Promise<CatfactData> => {
    try {
        const url = FACTS_URL
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        throw error
    }
}
