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

export default function Fakemon3() {
  return (
    <>
      <Card sx={cardStyle}>
        <Image
          src="/fakemon/Untitled 6.png"
          alt="Untitled 6"
          height={300}
          width={300}
        />
        <span>
          Lv. 16
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 7.png"
          alt="Untitled 7"
          height={300}
          width={300}
        />
        <span>
          Lv. 36
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 8.png"
          alt="Untitled 8"
          height={300}
          width={300}
        />
      </Card>
    </>
  );
}
