import {Pack} from "./Pack";
import {Component} from "react";
import {Paper, Typography} from "@mui/material";
import PackChart from "./PackChart";
import PackTable from "./PackTable";

export type PackProps = {
    pack: Pack
}

const PackView = ( { pack } : PackProps ) => {
    return (
        <Paper>
            <Typography variant={"h6"} align={"right"} padding={2}> { pack.name }</Typography>
            <PackChart pack={ pack } />
            <PackTable pack={ pack } />
        </Paper>
    )
}


export default PackView