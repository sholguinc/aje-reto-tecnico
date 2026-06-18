import { CLIENT_ACTIONS } from "@/constants";

export interface Client {
    id: number;
    names: string;
    email: string;
    phone: string;
};

export interface ClientApi {
    id: number;
    nombres: string;
    email: string;
    telefono: string;
}

export type ClientAction =
    typeof CLIENT_ACTIONS[keyof typeof CLIENT_ACTIONS];
