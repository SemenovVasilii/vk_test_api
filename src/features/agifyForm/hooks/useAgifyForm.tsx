import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../lib/schema";

export const useAgifyForm = () => {
    return useForm({
        defaultValues: {
            name: "",
        },
        resolver: yupResolver(schema),
    });
};