import { Outlet } from 'react-router-dom';
import { useSquid } from '@squidcloud/react';
import { useEffect } from 'react';
import { Header } from '@/components/Header.tsx';

export default function Layout() {
  const squid = useSquid();
  useEffect(() => {
    (window as any).squid = squid;
  }, [squid]);
  return (
    <div className={'w-full h-full flex flex-col'}>
      <Header />
      <div className={'main-view w-full h-full overflow-y-auto'}>
        <Outlet />
      </div>
    </div>
  );
}
