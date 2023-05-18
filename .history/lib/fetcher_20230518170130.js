import useSWR from "swr"
const baseURL ="http://localhost:8080/";

const response = (...args) => fetch(...args).then(res => res.json())


export default function Fetcher(endpoint){
const {data,error} =useSWR(`${baseURL}${endpoint}`,response)

return{
    data:data,
    isLoading:!error &&!data,
    isError:error
}

}