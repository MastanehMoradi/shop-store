import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryclient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript  initialColorMode={theme.config.initialColorMode}/>
      <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools/>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
