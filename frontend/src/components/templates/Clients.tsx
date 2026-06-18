import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { COLORS, CLIENT_ACTIONS } from "@/constants";
import { Card, AddCard, ClientDialog } from "../organisms";
import { type Client, type ClientAction } from "@/types";

import { FormOverlayTemplate } from "./FormOverlay";

export interface ClientsTemplateProps {
    clients: Client[]
}

export const ClientsTemplate = ({ clients }: ClientsTemplateProps) => {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<ClientAction>('')
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const handleCreate = () => {
        setAction(CLIENT_ACTIONS.CREATE);
        setOpen(true);
    };

    const handleEdit = (client: Client) => {
        setSelectedClient(client);
        setAction(CLIENT_ACTIONS.UPDATE);
        setOpen(true);
    };

    const handleDelete = (client: Client) => {
        setSelectedClient(client);
        setAction(CLIENT_ACTIONS.DELETE);
        setOpen(true);
    };

    return (
        <>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                }}
            >
                <Typography
                    className='clients-title'
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 3,
                        color: COLORS.background,
                    }}
                >
                    Conoce a nuestros clientes:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        padding: 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {clients.map((client) => (
                        <Card
                            key={client.id}
                            names={client.names}
                            email={client.email}
                            phone={client.phone}
                            onEdit={() => handleEdit(client)}
                            onDelete={() => handleDelete(client)}
                        />
                    ))}
                    <AddCard handleCreate={handleCreate} />
                </Box>
            </Box>
            <FormOverlayTemplate open={open}>
                <ClientDialog open={open} setOpen={setOpen} action={action} setAction={setAction} selectedClient={selectedClient} setSelectedClient={setSelectedClient} />
            </FormOverlayTemplate>
        </>
    );
};
