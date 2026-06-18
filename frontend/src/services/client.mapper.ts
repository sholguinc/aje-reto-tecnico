import type { ClientApi, Client } from "@/types";

export const toClientApi = (client: Client): ClientApi => ({
    id: client.id,
    nombres: client.names,
    email: client.email,
    telefono: client.phone,
});

export const toClientModel = (api: ClientApi): Client => ({
    id: api.id,
    names: api.nombres,
    email: api.email,
    phone: api.telefono,
});
