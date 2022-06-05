import { usePack } from "./PackAPI";
import {Pack} from "./Pack";
import PackView from "./PackView";
import packData from "../dummyData.json"
export function Index(){
    // const { data, isLoading } = usePack()

    const pack = packData as Pack
    // if(isLoading) return <p> Loading pack link... </p>

    return (
        <PackView pack={pack}/>
    )
}

