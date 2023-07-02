import { INews } from '@/data/NewsData';
import { truncateString } from '@/utils/Utils';
import { Box, Divider, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NewsModal from './NewsModal';

interface INewsPreviewProps {
  title?: string;
  data: INews[];
  limit: number;
  isMobile?: boolean;
}

function NewsPreview({ title, data, limit, isMobile }: INewsPreviewProps) {
  const [selectedNews, setSelectedNews] = useState<INews>();
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = (news: INews) => {
    setSelectedNews(news);
    setOpen(true);
  };

  return (
    <Box display='flex' flexDirection='column' rowGap={2}>
      {selectedNews && <NewsModal open={open} setOpen={setOpen} data={selectedNews} />}
      {title && (
        <Typography component='h6' variant='h6' textAlign={!isMobile ? 'initial' : 'center'} textTransform='uppercase' fontWeight='bold'>
          {title}
        </Typography>
      )}
      <Box display='flex' flexDirection='column' gap={4}>
        {data.length > 0 &&
          data.map((news: INews, index: number) => {
            if (index < limit)
              return (
                <Box key={index}>
                  <Box display='flex' justifyContent={!isMobile ? 'initial' : 'center'} flexWrap='wrap' gap={4} mb={4}>
                    <Image alt='news image' src={`/images/news/${news.image}`} height={200} width={300}></Image>
                    <Box display='flex' flexDirection='column' flex='1 1 45%'>
                      <Typography component='p' variant='body2'>
                        {news.datePosted}
                      </Typography>
                      <Typography component='h6' variant='h6' mt={1} sx={{ cursor: 'pointer' }} onClick={() => handleModal(news)}>
                        {news.title}
                      </Typography>
                      <Typography component='p' variant='body1'>
                        {truncateString(news.content, 200)}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              );
          })}
      </Box>
      <Box display='flex' justifyContent='flex-end'>
        <Typography component='p' variant='body1'>
          <Link href='/news'>read more</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default NewsPreview;
