import { Link } from 'react-router-dom';
import Icon from '@/components/lib/Icon.tsx';

export function Header() {
  return (
    <div className={'h-[76px] container bg-[#F0F3F5] shrink-0 grow-0 flex items-center'}>
      <Link to={'/'}>
        <Icon icon={'logo'} className={'h-[40px] w-[147px]'} />
      </Link>
    </div>
  );
}
