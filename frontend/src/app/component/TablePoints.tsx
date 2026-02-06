"use client";

import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MonitoringPointType, setLoading, setMonitoringPoints } from "../redux/slices/monitoringSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { MonitoringPoint } from "../api/monitoringPoint";
import { translateSensorModelName } from "../api/translate";
import SearchIcon from '@mui/icons-material/Search';

export function TablePoints() {
    const dispatch = useAppDispatch();
    const { items, total } = useAppSelector(state => state.monitoringPoint);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const rowsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            dispatch(setLoading(true));
            const api = new MonitoringPoint();
            const response = await api.getAllMonitoringPoints(page + 1, search);

            dispatch(setMonitoringPoints({
                items: response.items,
                total: response.total
            }));
        }
        const timeout = setTimeout(() => {
            fetchData();
        }, 500);
        return () => clearTimeout(timeout);
    }, [dispatch, page, search]);

    return (
        <TableContainer component={Paper}>
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2, backgroundColor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
                <Typography variant="h6" component="div" fontWeight="bold" color="primary">
                    Pontos de Monitoramento
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <TextField value={search} onChange={e => { setSearch(e.target.value), setPage(0) }} size="small" placeholder="Search for Machine or Point" InputProps={{ startAdornment: <SearchIcon /> }} />
                    <Button variant="contained" sx={{ mr: 2 }}>Create Point</Button>
                </Box>
            </Box>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Machine Name</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Machine Type</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Monitoring Point</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Sensor Model</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row: MonitoringPointType) => (
                        <TableRow key={row.id} sx={{ fontWeight: "light" }}>
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