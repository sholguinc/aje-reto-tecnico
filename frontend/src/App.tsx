import { SnackbarProvider } from "notistack";
import { ClientsProvider } from "@/context/ClientsContext";

import Layout from './Layout';
import ClientsPage from './pages/ClientsPage';


function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <ClientsProvider>
        <Layout>
          <ClientsPage />
        </Layout>
      </ClientsProvider>
    </SnackbarProvider>
  )
}

export default App
