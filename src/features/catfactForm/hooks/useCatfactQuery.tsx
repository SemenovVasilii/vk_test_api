import { useQuery } from "@tanstack/react-query";
import { getCatfact } from "../../../shared";

const GET_CATFACT_QUERY_SETTINGS = {
    queryKey: ["fact"],
    queryFn: getCatfact,
    enabled: false,
};

export const useCatfactQuery = () => {
    const query = useQuery(GET_CATFACT_QUERY_SETTINGS);
    return query;
};