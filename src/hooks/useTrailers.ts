import { useQuery } from "@tanstack/react-query"
import Trailer from "../entities/Trailer"
import APIClient from "../services/api-client"


const useTrailers = (productId: number) =>{

    const apiClient =  new APIClient<Trailer>(`/products/${productId}/movies`)

    return useQuery({
        queryKey: ['trailers', productId],
        queryFn: apiClient.getAll,
    })
}

export default useTrailers;