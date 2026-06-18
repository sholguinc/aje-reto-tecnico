import { ClientsTemplate } from "@/components/templates";
import { useClients } from "@/context/ClientsContext";

const ClientsPage = () => {
    const { clients } = useClients();

    return (
        <ClientsTemplate clients={clients} />
    );
};

export default ClientsPage;
