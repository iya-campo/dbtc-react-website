import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { INews } from '@/data/NewsData';
import Image from 'next/image';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 3,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  padding: 4,
  maxWidth: 600,
  '&:focus': {
    outline: 'none',
  },
};

interface INewsModalProps {
  data: INews;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function NewsModal({ data, open, setOpen }: INewsModalProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {data.title}
          </Typography>
          <Button variant='text' size='small' onClick={() => setOpen(false)} sx={{ minWidth: 0 }}>
            <Close />
          </Button>
        </Box>
        <Box display='flex' flexWrap='wrap' gap={4} maxHeight={380} sx={{ overflowY: 'auto' }}>
          <Box display='flex' justifyContent='center' flex='1 1 40%'>
            <Image alt='news image' src={`/images/news/${data.image}`} height={!isMobile ? 300 : 180} width={!isMobile ? 450 : 250}></Image>
          </Box>
          <Box display='flex' flex='1 1 40%' flexDirection='column' gap={2}>
            <Typography id='modal-modal-title' component='p' variant='body2'>
              {data.datePosted}
            </Typography>
            <Typography id='modal-modal-description' component='p' variant='body1'>
              {data.content}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default NewsModal;
