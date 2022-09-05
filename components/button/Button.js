import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({buttonText,color,onClick}) {
  return (
    <Stack spacing={5} direction="row">
      <Button variant="contained" style={{backgroundColor:color}} onClick={onClick}>{buttonText}</Button>
    </Stack>
  );
}