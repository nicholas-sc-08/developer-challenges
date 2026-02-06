"use client";

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material";
import { CreateModalProps } from "../types/modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { MachineService } from "../api/machine";
import { setMachines } from "../redux/slices/machineSlice";
import { MachineState } from "../types/machine";

export default function CreatePointModal({ open, onClose, onSucess }: CreateModalProps) {
    const [form, setForm] = useState({ name: "", machine: "", sensorModel: "" });
    const { items, isLoading } = useAppSelector(state => state.machine);
    const dispatch = useAppDispatch();
    useEffect(() => {
        async function fetchData() {
            const machineService = new MachineService();
            const response = await machineService.getManyMachines();
            dispatch(setMachines({
                items: response.items,
                isLoading: response.isLoading
            }));
        }
        fetchData();
    }, [dispatch]);
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ fontWeight: "bold" }}>New Monitoring Point</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField select label="Machine">
                {items && items.map((item: MachineState) => (
                    <MenuItem>{item.name}</MenuItem>
                ))}
                </TextField>
                </Box>
            </DialogContent>
            <DialogActions sx={{ display: "flex", p: 3 }}>
                <Button fullWidth variant="outlined" onClick={() => onClose()}>Cancel</Button>
                <Button fullWidth variant="contained">Create Point</Button>
            </DialogActions>
        </Dialog>
    );
}