import ProgramInfo, { IProgramInfo } from '@/data/ProgramInfo';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

function Programs() {
  return (
    <Box>
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        Programs
      </Typography>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography component='p' variant='body1'>
          The College Department opened in 1966 with 33 first year students who began their two-year associate diploma in electrical or mechanical
          technology. Government recognition for the complete five-year Mechanical Engineering (ME) and Electronics and Communications Engineering
          (ECE) degrees was obtained in 1973, hence the change of the name from Don Bosco Technical Institute to Don Bosco Technical College. Since
          then, the college department has achieved top-of- the-category and above-national-average performances in the board exams.
        </Typography>
        {ProgramInfo.map((program: IProgramInfo, index: number) => (
          <Box key={index} display='flex' flexDirection='column' rowGap={2} sx={{ py: 4, borderTop: '1px solid #ddd' }}>
            <Typography component='p' variant='body1' textAlign='center' textTransform='uppercase' fontWeight='bold'>
              {program.course}
            </Typography>
            <Typography component='p' variant='body1' fontWeight='bold'>
              {program.name}
            </Typography>
            <Typography component='p' variant='body1'>
              {program.desc1}
            </Typography>
            {program.desc2 && (
              <Typography component='p' variant='body1'>
                {program.desc2}
              </Typography>
            )}
            {program.desc3 && (
              <Typography component='p' variant='body1'>
                {program.desc3}
              </Typography>
            )}
            <List sx={{ py: 0 }}>
              {program.skills.map((skill: string, index: number) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <Typography component='p' variant='body1'>{`• ${skill}`}</Typography>
                </ListItem>
              ))}
            </List>
            {program.desc4 && (
              <Typography component='p' variant='body1'>
                {program.desc4}
              </Typography>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Programs;
