import { usePack } from "./PackAPI";
import {Pack} from "./Pack";
import PackView from "./PackView";
import {CircularProgress} from "@mui/material";
export function Index(){
    const { data, isLoading, isError } = usePack()

    if(isError){
       return( <ul>
            <li> { isError.name }</li>
            <li> { isError.message }</li>
        </ul> )
    }

    if(isLoading){
        return (
            <CircularProgress color={"inherit"}/>
        )
    }

    const pack = data as Pack

    return (
        <PackView pack={pack} />
    )

}

