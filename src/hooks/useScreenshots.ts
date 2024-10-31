
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client"

const useScreenshots = (productId: number) => {

    const apiClient = new APIClient<Screenshot[]>(`/products/${productId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', productId],
        queryFn:()=> apiClient.getOne(),
    })
}

export default useScreenshots;