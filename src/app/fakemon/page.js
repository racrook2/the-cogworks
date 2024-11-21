'use client';

import { sm } from '@/app/styles/mediaQueries';
import { Grid2 as Grid, Paper, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const gridStyle = {
  [sm]: {
    justifyContent: 'center'
  },

  img: {
    height: '100%',
    width: '100%'
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  })
}));

function generateGrid() {
  let grid = [];

  for (let row = 0; row < 3; row++) {
    grid[row] = [];

    for (let col = 0; col < 3; col++) {
      const name = `Untitled ${row * 3 + col}`;

      grid[row].push(
        <Grid key={name} size={{ xs: 5, sm: 4, md: 4, lg: 3, xl: 2 }}>
          <Item>
            <Link href={`/fakemon/${row + 1}`}>
              <Image
                src={`/fakemon/${name}.png`}
                alt={name}
                height={300}
                width={300}
              />
            </Link>
          </Item>
        </Grid>
      );
    }
  }

  return grid;
}

export default function Fakemon() {
  return (
    <Grid container spacing={2} sx={gridStyle}>
      {generateGrid()}
    </Grid>
  );
}
