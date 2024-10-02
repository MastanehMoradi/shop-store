import {AxiosRequestConfig, CanceledError} from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface FetchResponse<T> {
    results: T[];
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {

    // const [data, setData] = useState<T[]>([]);
    // const [error, setError]= useState("");
    // const [isLoading, setLoading] = useState(false);

    const data = [{
        id: 1, name: 'Product 1', count: 2, score: 68,
        detail: "description",
        category: "home",
        backgroundImage: "https://img.freepik.com/premium-photo/house-illustration-icon-cartoon-graphics_1070876-8889.jpg"
    },
    {
        id: 1, name: 'Product 2', count: 2, score: 80,
        detail: "description",
        category: "home",
        backgroundImage: "https://img.freepik.com/premium-photo/house-illustration-icon-cartoon-graphics_1070876-8889.jpg"
    },
    {
        id: 1, name: 'Product 3', count: 2, score: 40,
        detail: "description",
        category: "home",
        backgroundImage: "https://img.freepik.com/premium-photo/house-illustration-icon-cartoon-graphics_1070876-8889.jpg"
    }];
    const error = '';
    const isLoading = false;

    // useEffect(() => {
    //     const controller = new AbortController();
    //     setLoading(true);
    //     apiClient.get<FetchResponse<T>>(endpoint,{
    //         signal: controller.signal,
    //         ...requestConfig
    //     })
    //     .then((res) =>{
    //         setData(res.data.results)
    //         setLoading(false);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //         if(error instanceof CanceledError) return;
    //         setError(error.message);
    //         setLoading(false);
    //     })
    //     return () => controller.abort();
    // }, dependencies?[...dependencies]:[]);

    return {data, error, isLoading};
}

export default useData;