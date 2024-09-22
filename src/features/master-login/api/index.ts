import { axiosInstance } from "@/src/api/axiosClient";
import { AxiosError } from "axios";
import { loginRequestProps } from "../type";

export async function loginRequest( payload : loginRequestProps ) {
    try {
        const {data} = await axiosInstance.post("/auth/login", payload)
        return data
    } catch(error) {
        if (error instanceof AxiosError) {
            const {response} = error
            throw new Error(response?.data?.error?.message)
        }


        throw new Error("Unexpected Error")
    }
}