import {useParams} from "react-router-dom";
import useSWR from 'swr'

const fetcher = async(url:string) => {
    const response = await fetch(url)

    if(!response.ok){
        const error = new Error("Failed to get data.")
        error.message = response.statusText
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
        `https://rucksackapp.herokuapp.com/api/v1/${hash}`,
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