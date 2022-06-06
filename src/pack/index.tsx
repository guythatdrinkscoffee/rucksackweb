import { usePack } from "./PackAPI";
import {Pack} from "./Pack";
import PackView from "./PackView";
import {CircularProgress} from "@mui/material";
import NotFoundPage from "../404/NotFoundPage";
export function Index(){
    const { data, isLoading, isError } = usePack()

    if(isError){
       return(
           <NotFoundPage/>
       )
    }

    if(isLoading){
        return (
                <div style={{display: 'flex', justifyContent:'center', height: '100%'}} >
                <CircularProgress
                    color={'inherit'}
                    size={'5rem'}
                    thickness={3}
                />
            </div>
        )
    }

    const pack = data as Pack

    return (
        <PackView pack={pack} />
    )

}

