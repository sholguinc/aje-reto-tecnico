import {
    Dialog,
    DialogTitle,
} from "@mui/material";

import { type Client, type ClientAction } from "@/types";
import { COLORS, CLIENT_ACTIONS_TITLE } from '@/constants';
import { ClientForm } from "./ClientForm";

interface ClientDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    action: ClientAction;
    setAction: React.Dispatch<React.SetStateAction<ClientAction>>;
    selectedClient: Client | null;
    setSelectedClient: React.Dispatch<React.SetStateAction<Client | null>>;
}


export const ClientDialog = ({ open, setOpen, action, setAction, selectedClient, setSelectedClient }: ClientDialogProps) => {
    return (
        <Dialog
            className="form-dialog"
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
            slotProps={{
                paper: {
                    sx: {
                        p: 3,
                        borderRadius: 3,
                    },
                },
            }}
        >
            <DialogTitle
                sx={{ textAlign: "center", color: COLORS.primary, fontWeight: 600, textTransform: 'uppercase' }}
            >
                {CLIENT_ACTIONS_TITLE[action]}
            </DialogTitle>

            <ClientForm setOpen={setOpen} action={action} setAction={setAction} selectedClient={selectedClient} setSelectedClient={setSelectedClient}  />
        </Dialog>
    );
};
