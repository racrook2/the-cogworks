import { East } from '@mui/icons-material';
import { Card } from '@mui/material';
import Image from 'next/image';

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  }
};

export default function Fakemon1() {
  return (
    <>
      <Card sx={cardStyle}>
        <Image
          src="/fakemon/Untitled 0.png"
          alt="Untitled 0"
          height={300}
          width={300}
        />
        <span>
          Lv. 16
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 1.png"
          alt="Untitled 1"
          height={300}
          width={300}
        />
        <span>
          Lv. 36
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 2.png"
          alt="Untitled 2"
          height={300}
          width={300}
        />
      </Card>
    </>
  );
}
