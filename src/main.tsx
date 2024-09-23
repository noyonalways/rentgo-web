import ThemeProvider from "@/components/providers/theme-provider.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Toaster />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
