import Banner from '@/shared/components/Banner';
import { Box, Container, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

function Gallery() {
  const imageFiles: string[] = ['gal-1.jpg', 'gal-2.jpg', 'gal-3.jpg', 'gal-4.jpg', 'gal-5.jpg', 'gal-6.jpg', 'gal-7.jpg', 'gal-8.jpg'];
  const [selectedImage, setSelectedImage] = useState<string>();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (image: string) => {
    setSelectedImage(image);
    setIsFocused(true);
  };

  return (
    <>
      <Modal
        open={isFocused}
        onClose={() => setIsFocused(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          alt='gallery image'
          src={`/images/gallery/${selectedImage}`}
          height={600}
          width={800}
          style={{
            border: '10px solid #fff',
            borderRadius: '4px',
            boxShadow: '0px 2px 10px #555',
          }}
        ></Image>
      </Modal>
      <Box>
        <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
          Gallery
        </Typography>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {imageFiles.map((image: string, index: number) => (
            <Box key={index} sx={{ padding: 1, boxShadow: '0 0 10px #ccc', cursor: 'pointer' }} onClick={() => handleFocus(image)}>
              <Image alt='gallery image' src={`/images/gallery/${image}`} height={200} width={300}></Image>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Gallery;
