import axios from "axios";

import type { Client, ClientApi } from "@/types";
import { toClientApi, toClientModel } from "./client.mapper";

const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) {
    throw new Error("Missing VITE_API_URL env variable");
}

const handleAxiosError = (error: unknown) => {
    throw error;
};

export const ClientService = {
    getAll: async (): Promise<Client[]> => {
        try {
            const res = await axios.get<ClientApi[]>(`${baseUrl}/clientes`);
            return res.data.map(toClientModel);
        } catch (error) {
            throw handleAxiosError(error);
        }
    },

    get: async (id: number) => {
        try {
            const res = await axios.get<ClientApi>(`${baseUrl}/clientes/${id}`);
            return toClientModel(res.data);
        } catch (error) {
            throw handleAxiosError(error);
        }
    },

    create: async (data: Client) => {
        try {
            const createPayload = toClientApi(data);
            const res = await axios.post(`${baseUrl}/clientes`, createPayload);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    },

    update: async (id: number, data: Client) => {
        try {
            const updatePayload = toClientApi(data);
            const res = await axios.patch(`${baseUrl}/clientes/${id}`, updatePayload);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    },

    remove: async (id: number) => {
        try {
            const res = await axios.delete(`${baseUrl}/clientes/${id}`);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    },
};
