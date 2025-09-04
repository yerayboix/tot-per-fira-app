"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/utils/trpc";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";


export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
      <Toaster 
        richColors 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'white',
            color: 'var(--secondary-color)',
            border: '2px solid #000000',
            borderRadius: '0px',
            boxShadow: '2px 2px 0px 0px #000000',
            fontFamily: 'var(--font-clash-display)',
            fontWeight: '500',
          },
        }}
      />
    </ThemeProvider>
  );
}
