"use client";

import { Container } from "@mui/material";
import { TablePoints } from "../component/TablePoints";

export default function page() {
    return (
        <Container sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
            <TablePoints />
        </Container>
    );
}