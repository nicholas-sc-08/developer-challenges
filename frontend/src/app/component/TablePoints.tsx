"use client";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { MonitoringPointType, setLoading, setMonitoringPoints } from "../redux/slices/monitoringSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { MonitoringPoint } from "../api/monitoringPoint";
import { translateSensorModelName } from "../api/translate";

export function TablePoints() {
    const dispatch = useAppDispatch();
    const { items, total, isLoading } = useAppSelector(state => state.monitoringPoint);
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            dispatch(setLoading(true));
            const api = new MonitoringPoint();
            const response = await api.getAllMonitoringPoints(page);

            dispatch(setMonitoringPoints({
                items: response.items,
                total: response.total
            }));
        }
        fetchData().then(() => console.log(items));
    }, [dispatch]);

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
                    {items.map((row: MonitoringPointType) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.machine.name}</TableCell>
                            <TableCell>{row.machine.type}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.sensor ? translateSensorModelName(row.sensor.model) : "none"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination rowsPerPageOptions={[5]} component={"div"} count={total} rowsPerPage={rowsPerPage} page={page} onPageChange={(e, newPage) => setPage(newPage)} />
        </TableContainer>
    );
}