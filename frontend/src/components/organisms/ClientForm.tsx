import {
    DialogContent,
    DialogActions,
    Stack,
} from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

import { FormField } from "../molecules";
import { Button } from "../atoms";
import { type Client, type ClientAction } from "@/types";
import { CLIENT_ACTIONS_TITLE, CLIENT_ACTIONS } from '@/constants';
import { ClientService } from "@/services/clients.service";
import { useClients } from "@/context/ClientsContext";

type ClientForm = Omit<Client, 'id'>;

interface ClientFromProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    action: ClientAction;
    setAction: React.Dispatch<React.SetStateAction<ClientAction>>;
    selectedClient: Client | null;
    setSelectedClient: React.Dispatch<React.SetStateAction<Client | null>>
}


export const ClientForm = ({ setOpen, action, setAction, selectedClient, setSelectedClient }: ClientFromProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const { fetchClients } = useClients();

    const isDelete = action == CLIENT_ACTIONS.DELETE;
    const actionTitle = CLIENT_ACTIONS_TITLE[action];
    const actionName = actionTitle ? actionTitle.split(' ')[0] : 'Guardar';

    let initialValueForm: ClientForm = {
        names: "",
        email: "",
        phone: "",
    }

    if (selectedClient) {
        initialValueForm = {
            names: selectedClient.names,
            email: selectedClient.email,
            phone: selectedClient.phone
        }
    }

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<ClientForm>(initialValueForm);

    const handleChange =
        (field: keyof ClientForm) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setForm((prev) => ({
                    ...prev,
                    [field]: e.target.value,
                }));
            };

    const handleSubmit = async () => {
        try {
            setLoading(true);

            if (action === CLIENT_ACTIONS.CREATE) {
                await ClientService.create(form as Client);
            }

            if (action === CLIENT_ACTIONS.UPDATE) {
                const clientId = selectedClient?.id as number;
                await ClientService.update(clientId, form as Client);
            }

            if (action === CLIENT_ACTIONS.DELETE) {
                const clientId = selectedClient?.id as number;
                await ClientService.remove(clientId);
            }

            setLoading(false);

            enqueueSnackbar("Petición procesada correctamente", {
                variant: "success",
            });

            await fetchClients();

            console.log(form);
            setAction('');
            setSelectedClient(null);
            setOpen(false);
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error: unknown) => {
        console.error(error);

        let message = "Error inesperado";

        if (axios.isAxiosError(error)) {
            message =
                error.response?.data?.message ||
                error.message;
        }

        enqueueSnackbar(message, {
            variant: "error",
        });

        setLoading(false);
    }

    const handleCancel = () => {
        setAction('');
        setSelectedClient(null);
        setOpen(false)
    }

    return (
        <>
            {!isDelete && <DialogContent className="form-dialog-content">
                <Stack spacing={2} sx={{ marginTop: 1 }}>
                    <FormField
                        label="Nombres"
                        value={form.names}
                        onChange={handleChange("names")}
                    />

                    <FormField
                        label="Email"
                        value={form.email}
                        onChange={handleChange("email")}
                    />

                    <FormField
                        label="Teléfono"
                        value={form.phone}
                        onChange={handleChange("phone")}
                    />
                </Stack>
            </DialogContent>
            }

            <DialogActions sx={{
                justifyContent: isDelete ? "center" : "flex-end",
            }}>
                <Button label="Cancelar" onClick={handleCancel} sx={{ borderRadius: 2 }} />
                <Button disabled={loading} label={actionName} variant="contained" onClick={handleSubmit} sx={{ borderRadius: 2 }} />
            </DialogActions></>
    );
};
