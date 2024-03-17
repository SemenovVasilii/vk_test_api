import { useQuery } from "@tanstack/react-query";
import { getAgifyUser } from "../../../shared";

export const useAgifyQuery = (name: string) => {
    const query = useQuery({
        queryKey: ["user", name],
        queryFn: ({ queryKey, signal }) => getAgifyUser(queryKey[1], signal),
        enabled: false,
    });

    return query;
};