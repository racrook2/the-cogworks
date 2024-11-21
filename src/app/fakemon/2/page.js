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

export default function Fakemon2() {
  return (
    <>
      <Card sx={cardStyle}>
        <Image
          src="/fakemon/Untitled 3.png"
          alt="Untitled 3"
          height={300}
          width={300}
        />
        <span>
          Lv. 16
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 4.png"
          alt="Untitled 4"
          height={300}
          width={300}
        />
        <span>
          Lv. 36
          <East />
        </span>
        <Image
          src="/fakemon/Untitled 5.png"
          alt="Untitled 5"
          height={300}
          width={300}
        />
      </Card>
    </>
  );
}
