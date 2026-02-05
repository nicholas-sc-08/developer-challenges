"use client";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { MonitoringPoint } from "../api/monitoringPoint";

export function TablePoints() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const rowsPerPage = 5;
    const monitoringPoint = new MonitoringPoint();

    useEffect(() => {
        monitoringPoint.getAllMonitoringPoints(page).then(m => setData(m));
    }, [page]);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Machine Name</TableCell>
                        <TableCell>Machine Type</TableCell>
                        <TableCell>Monitoring Point</TableCell>
                        <TableCell>Sensor Model</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.machine.name}</TableCell>
                            <TableCell>{row.machine.type}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.sensor.model}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination rowsPerPageOptions={[5]} component={"div"} count={data.length} rowsPerPage={rowsPerPage} page={page} onPageChange={(e, newPage) => setPage(newPage)} />
        </TableContainer>
    );
}