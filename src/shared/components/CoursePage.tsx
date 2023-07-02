import News, { INews } from '@/data/NewsData';
import ProgramInfo, { IProgramInfo } from '@/data/ProgramInfo';
import NewsPreview from '@/shared/components/NewsPreview';
import { ICourseDetails } from '@/types/Types';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

interface ICoursePageProps {
  courseId: string;
  courseName: string;
}

function CoursePage({ courseId, courseName }: ICoursePageProps) {
  const courseDetails: ICourseDetails = {
    ...ProgramInfo.find((program: IProgramInfo) => program.name.toLowerCase().search(courseName) > -1),
    highlights: News.filter((news: INews) => news.tags.includes(courseId)),
  };

  return (
    <Box>
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        {courseName}
      </Typography>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography component='p' variant='body1'>
          {courseDetails.desc1}
        </Typography>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' rowGap={4} columnGap={12}>
          <Box display='flex' flexDirection='column' flex='1 1 45%' rowGap={2}>
            <Typography component='h6' variant='h6' textTransform='uppercase' fontWeight='bold'>
              Course Description
            </Typography>
            <Typography component='p' variant='body1' fontWeight='bold'>
              {courseDetails.name}
            </Typography>
            <Typography component='p' variant='body1'>
              {courseDetails.desc1}
            </Typography>
            {courseDetails.desc2 && (
              <Typography component='p' variant='body1'>
                {courseDetails.desc2}
              </Typography>
            )}
            {courseDetails.desc3 && (
              <Typography component='p' variant='body1'>
                {courseDetails.desc3}
              </Typography>
            )}
            <List sx={{ py: 0 }}>
              {courseDetails.skills.map((skill: string, index: number) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <Typography component='p' variant='body1'>{`• ${skill}`}</Typography>
                </ListItem>
              ))}
            </List>
            {courseDetails.desc4 && (
              <Typography component='p' variant='body1'>
                {courseDetails.desc4}
              </Typography>
            )}
          </Box>
          {courseDetails.highlights.length > 0 && (
            <Box display='flex' flex='1 1 25%'>
              <NewsPreview title='Highlights and Achievements' data={courseDetails.highlights} limit={3} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default CoursePage;
