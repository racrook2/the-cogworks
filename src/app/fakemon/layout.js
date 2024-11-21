import { West } from '@mui/icons-material';
import Link from 'next/link';

export default function FakemonLayout({ children }) {
  return (
    <>
      <Link href="/fakemon">
        <West />
      </Link>
      {children}
    </>
  );
}
