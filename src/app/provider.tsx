import { Provider } from "@/components/ui/provider";
import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type AppProviderType = {
  children?: React.ReactNode;
};

export function AppProvider({ children }: AppProviderType) {
  const [queryClient] = useState<QueryClient>(
    new QueryClient({
      defaultOptions: queryConfig,
    })
  );

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
