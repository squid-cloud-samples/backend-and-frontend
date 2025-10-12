import { createRoot } from 'react-dom/client';
import './styles/tw.css';
import './styles/global.scss';
import { SquidContextProvider } from '@squidcloud/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout.tsx';
import { ROUTES } from '@/routes.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: ROUTES.map((route) => ({
      path: route.path,
      element: route.component,
      index: !!route.mainRoute,
    })),
  },
]);

createRoot(document.getElementById('root')!).render(
  <SquidContextProvider
    options={{
      appId: import.meta.env.VITE_SQUID_APP_ID,
      region: import.meta.env.VITE_SQUID_REGION,
      environmentId: import.meta.env.VITE_SQUID_ENVIRONMENT_ID,
      squidDeveloperId: import.meta.env.VITE_SQUID_DEVELOPER_ID,
    }}
  >
    <RouterProvider router={router} />
  </SquidContextProvider>,
);
