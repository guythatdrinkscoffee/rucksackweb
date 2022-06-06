import {useParams} from "react-router-dom";
import useSWR from 'swr'
import {Pack} from "./Pack";

const fetcher = async(url:string) => {
    const response = await fetch(url)

    if(!response.ok){
        const error = new Error("Failed to get data.")
        throw error
    } else {
        return response.json()
    }
}

export function usePack() {
    //Grab the has query from the URL
    const { hash } = useParams()

    //Use SWR to fetch the data from the  server
    const { data, error }  = useSWR(
        `http://localhost:8080/api/v1/${hash}`,
        fetcher,
        {
            revalidateOnFocus: false,
            onErrorRetry: (error, key, config, revalidate, {retryCount}) => {
                // Only retry up to 10 times.
                if (retryCount >= 10) return
            }
        }
    )

    return {
        data: data,
        isLoading: !data && !error,
        isError: error
    }
}