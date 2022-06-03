import {useParams} from "react-router-dom";
import useSWR from 'swr'

const fetcher = async(url: string) => {
    const res = await fetch(url)

    return res.json()
}


function usePack(){
    const { hash } = useParams()

    const { data, error } = useSWR(
        `http://localhost:8080/api/v1/${hash}`,
        fetcher,
        {
            revalidateOnFocus: false
        }
    )

    return {
        pack: data,
        isError: error
    }
}

function Pack(){
    const { pack , isError} = usePack()

    if(!pack) return <p>'There is no data.'</p>
    if(isError) return <p>'There was an error.'</p>

    return (
        <p> { pack.id }</p>
    )
}

export default Pack