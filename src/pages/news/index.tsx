import React, { ChangeEvent, useEffect, useState } from 'react';
import Banner from '@/shared/components/Banner';
import News, { INews } from '@/data/NewsData';
import NewsModal from '@/shared/components/NewsModal';
import Image from 'next/image';
import { Box, Container, Divider, FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup, Typography } from '@mui/material';
import { truncateString } from '@/utils/Utils';
import Events, { IEvents } from '@/data/EventsData';

function NewsPage() {
  const PAGE_LIMIT: number = 5;

  const [displayedNews, setDisplayedNews] = useState<INews[]>(News);
  const [selectedNews, setSelectedNews] = useState<INews>();
  const [filter, setFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<boolean>(false);

  const handlePageChange = (event: ChangeEvent<any>, value: number) => {
    setDisplayedNews(News.filter((_, index: number) => index >= value * PAGE_LIMIT - PAGE_LIMIT && index < value * PAGE_LIMIT));
    setPage(value);
  };

  const handleFilterChange = (event: ChangeEvent<any>, value: string) => {
    if (value === 'all') {
      setDisplayedNews(News);
    } else {
      setDisplayedNews(News.filter((news: INews) => news.tags.includes(value)));
    }
    setFilter(value);
    setPage(1);
  };

  const handleModal = (news: INews) => {
    setSelectedNews(news);
    setOpen(true);
  };

  return (
    <Box>
      {selectedNews && <NewsModal open={open} setOpen={setOpen} data={selectedNews} />}
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        News and Events
      </Typography>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        <Box display='flex' flexDirection='column' gap={2}>
          <Box display='flex' flexWrap='wrap-reverse' rowGap={4} columnGap={8}>
            <Box display='flex' flexDirection='column' flex='1 1 60%' rowGap={4}>
              <Pagination
                count={filter === 'all' ? Math.round(News.length / 5) : displayedNews.length >= 5 ? Math.round(displayedNews.length / 5) : 1}
                page={page}
                onChange={handlePageChange}
              />
              {displayedNews.map((news: INews, index: number) => (
                <Box key={index}>
                  <Box display='flex' flexWrap='wrap' gap={4} mb={4}>
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
              ))}
            </Box>
            <Box display='flex' flexDirection='column' flex='1 0 30%' rowGap={4}>
              <Box display='flex' flexDirection='column' rowGap={2}>
                <Typography component='p' variant='body1' textTransform='uppercase' textAlign='center' fontWeight='bold'>
                  Upcoming Events
                </Typography>
                {Events.map((event: IEvents, index: number) => (
                  <Box key={index} display='flex' columnGap={2}>
                    <Image alt='calendar icon' src='/images/news/event.png' height={40} width={40}></Image>
                    <Box display='flex' flexDirection='column'>
                      <Typography component='p' variant='body1'>
                        {event.date}
                      </Typography>
                      <Typography component='p' variant='body1'>
                        {`${event.time} ${event.name}`}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <FormControl>
                <FormLabel id='filter-radio-buttons-group-label'>Filter by:</FormLabel>
                <RadioGroup
                  aria-labelledby='filter-radio-buttons-group-label'
                  defaultValue='all'
                  name='filter-radio-buttons-group'
                  onChange={handleFilterChange}
                >
                  <FormControlLabel value='all' control={<Radio size='small' />} label='Show all' />
                  <FormControlLabel value='it' control={<Radio size='small' />} label='Information Technology' />
                  <FormControlLabel value='cs' control={<Radio size='small' />} label='Computer Science' />
                  <FormControlLabel value='archi' control={<Radio size='small' />} label='Architecture' />
                  <FormControlLabel value='ece' control={<Radio size='small' />} label='Electronics Engineering' />
                  <FormControlLabel value='cpe' control={<Radio size='small' />} label='Computer Engineering' />
                  <FormControlLabel value='me' control={<Radio size='small' />} label='Mechanical Engineering' />
                  <FormControlLabel value='entrep' control={<Radio size='small' />} label='Entrepreneurship' />
                  <FormControlLabel value='amt' control={<Radio size='small' />} label='Aircraft Maintenance Technology' />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NewsPage;
