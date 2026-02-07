"use client";

import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { DeleteModalProps } from "../types/modal";
import { MonitoringPoint } from "../api/monitoringPoint";

export default function DeletePointModal({ open, onClose, onSucess, pointInfo }: DeleteModalProps) {
    const pointService = new MonitoringPoint();
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle fontWeight={"bold"}>Delete Monitoring Point</DialogTitle>
            <DialogContent dividers>
                <Alert severity="info">Are you sure you want to delete <b>{pointInfo.name}</b> point?</Alert>
            </DialogContent>
            <DialogActions sx={{ display: "flex", p: 3 }}>
                <Button fullWidth variant="outlined" onClick={() => onClose()}>Cancel</Button>
                <Button fullWidth variant="contained" onClick={() => pointService.deleteMonitoringPoint(pointInfo.id).then(() => onSucess())}>Delete Point</Button>
            </DialogActions>
        </Dialog >
    );
}