import React, { useState } from 'react';
import { ICarouselImages } from '@/data/CarouselData';
import { Box, Button, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface ICarouselProps {
  images: ICarouselImages[];
  isMobile: boolean;
}

function Carousel({ images, isMobile }: ICarouselProps) {
  const [selectedImage, setSelectedImage] = useState<ICarouselImages>(images[0]);

  const handleBack = () => {
    if (images.indexOf(selectedImage) !== 0) {
      setSelectedImage(images[images.indexOf(selectedImage) - 1]);
    } else {
      setSelectedImage(images[images.length - 1]);
    }
  };

  const handleNext = () => {
    if (images.indexOf(selectedImage) !== images.length - 1) {
      setSelectedImage(images[images.indexOf(selectedImage) + 1]);
    } else {
      setSelectedImage(images[0]);
    }
  };

  const handleOptions = (selectedImage: ICarouselImages) =>
    setSelectedImage({
      image: selectedImage.image,
      caption: selectedImage.caption ? selectedImage.caption : null,
    });

  return (
    <Box display='flex' flexDirection='column'>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ccc',
          backgroundImage: `url('${selectedImage.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: !isMobile ? '70vh' : '85vh',
        }}
      >
        {selectedImage.caption && (
          <Box position='absolute' width='100%' textAlign='center' bgcolor='#1a1a1a' color='#fff' p={1} sx={{ bottom: 0 }}>
            <Typography component='p' variant='body1' fontWeight='bold'>
              {selectedImage.caption}
            </Typography>
          </Box>
        )}
        <Button variant='outlined' onClick={handleBack} sx={{ mx: 2 }}>
          <ChevronLeft />
        </Button>
        <Button variant='outlined' onClick={handleNext} sx={{ mx: 2 }}>
          <ChevronRight />
        </Button>
      </Box>
      <Box display='flex' justifyContent='center' bgcolor='#ddd' p={1}>
        {images.map((image: ICarouselImages, index: number) => (
          <Button
            key={index}
            onClick={() => handleOptions(image)}
            sx={{ bgcolor: '#bbb', borderRadius: '50%', minWidth: 0, mx: 0.5, p: 0.7, '&:hover': { bgcolor: '#aaa' } }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
