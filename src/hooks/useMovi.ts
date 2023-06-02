import{useQuery} from "@tanstack/react-query"
import apiClient from "../services/api-client"


const useMovi=(name:string)=>useQuery({
    queryKey:['shows',name],
    queryFn:()=> apiClient.get(name)
})

export default useMovi;