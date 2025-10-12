import { ReactElement } from 'react';
import { Main } from '@/components/Main.tsx';

interface NavBarItem {
  path: string;
  component: ReactElement;
  mainRoute?: boolean;
}

export const ROUTES: Array<NavBarItem> = [
  {
    path: '/',
    component: <Main />,
    mainRoute: true,
  },
];
