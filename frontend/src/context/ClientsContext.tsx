import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useSnackbar } from "notistack";

import { ClientService } from "@/services/clients.service";
import { type Client } from "@/types";

type ClientsContextType = {
    clients: Client[];
    fetchClients: () => Promise<void>;
    loading: boolean;
};

export const ClientsContext = createContext<ClientsContextType | null>(null);

export const useClients = () => {
    const ctx = useContext(ClientsContext);
    if (!ctx) throw new Error("useClients must be used inside provider");
    return ctx;
};


export const ClientsProvider = ({ children }: any) => {
    const { enqueueSnackbar } = useSnackbar();

    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchClients = async () => {
        try {
            setLoading(true);
            const data = await ClientService.getAll();
            setClients(data);
        } catch {
            enqueueSnackbar("Error al cargar clientes", {
                variant: "error",
            });
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const value = useMemo(
        () => ({
            clients,
            fetchClients,
            loading,
        }),
        [clients, fetchClients, loading]
    );

    return (
        <ClientsContext.Provider
            value={value}
        >
            {children}
        </ClientsContext.Provider>
    );
};

