import {Pack} from "./Pack";
import {
    Grid, styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {toTableViewData, totalPrice, totalWeight} from "./PackOperations";
import BackpackIcon from '@mui/icons-material/Backpack';
import {PackProps} from "./PackView";

const PackTable = ({ pack } : PackProps ) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.sizeSmall}`]: {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.common.black,
            fontWeight: "bold"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: theme.palette.action.hover,
        fontWeight: "bold"
    }));


    const data = toTableViewData(pack.packItems)
    const rows = []
    for (let entry of Array.from(data.entries()).sort()) {
        rows.push(entry)
    }

    return (
        <Grid>
            <Grid item xs={2}>
                <TableContainer>
                    <Table stickyHeader={true} size={"small"} aria-label={"gear table"}>
                        <TableHead>
                            <TableRow>
                                <TableCell align={"left"}>Name</TableCell>
                                <TableCell align={"left"}/>
                                <TableCell align={"right"}>Price</TableCell>
                                <TableCell align={"right"}>Weight</TableCell>
                                <TableCell align={"right"}>Qty</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            rows.map((row, index) => (
                                <TableBody key={index}>
                                    <StyledTableRow>
                                        <StyledTableCell colSpan={5} component="th"
                                                         scope="row"> {row[0]}</StyledTableCell>
                                    </StyledTableRow>
                                    {
                                        row[1].map((item) => (
                                            <TableRow key={item.gear.id}>
                                                <TableCell
                                                    align={"left"}>{`${item.gear.name} / ${item.gear.desc}`}</TableCell>
                                                {
                                                    item.inBaseWeight ?
                                                        <TableCell>
                                                            {<BackpackIcon fontSize={"small"} titleAccess={"In Base Weight"}/>}
                                                        </TableCell> :

                                                        <TableCell/>
                                                }
                                                <TableCell align={"right"}>{item.gear.price}</TableCell>
                                                <TableCell align={"right"}>{item.gear.weight}</TableCell>
                                                <TableCell align={"right"}>{`x${item.quantity}`}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    <StyledTableRow>
                                        <TableCell colSpan={3} align={"right"}>{totalPrice(row[1])}</TableCell>
                                        <TableCell align={"right"}>{totalWeight(row[1])}</TableCell>
                                        <TableCell
                                            align={"right"}>{`x${row[1].map((item) => item.quantity).reduce((p, r) => p + r, 0)}`}</TableCell>
                                    </StyledTableRow>
                                </TableBody>
                            ))
                        }
                        <TableRow>
                            <TableCell colSpan={3} >
                                <Typography variant={"body1"} sx={{ alignItems: 'center' ,display: 'flex', color:'gray'}}><BackpackIcon fontSize={"small"}/> = Base Weight </Typography>
                            </TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default PackTable