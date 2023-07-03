import React, { useEffect, useState } from 'react';
import { Inter } from '@next/font/google';
import Carousel from '@/shared/components/Carousel';
import DisplayCard from '@/shared/components/DisplayCard';
import NewsPreview from '@/shared/components/NewsPreview';
import CarouselImages from '@/data/CarouselData';
import News from '@/data/NewsData';
import Programs, { IPrograms } from '@/data/ProgramData';
import StudentOrgs, { IStudentOrgs } from '@/data/StudentOrgData';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

interface IHomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: IHomeProps) {
  return (
    <main className={inter.className}>
      <Carousel images={CarouselImages} isMobile={isMobile} />
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        Ascende Superius!
      </Typography>
      <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
        <Box display='flex' flexDirection='column' rowGap={2}>
          <Typography component='h5' variant='h5'>
            Welcome to Don Bosco Technical College
          </Typography>
          <Typography component='p' variant='body1'>
            Don Bosco Technical College Mandaluyong (DBTC) is a private Catholic educational institution in Manila, Philippines, owned and operated by
            the Salesians of Don Bosco. DBTC offers all-boys elementary and an academic and technical curriculum junior high school education,
            co-educational senior high and tertiary education, as well as vocational training for out-of-school youth. Established in 1953, Don Bosco
            Technical College Mandaluyong is the first Don Bosco Educational Center in Metro Manila.
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' flexDirection='column' rowGap={4}>
          <Typography component='h6' variant='h6' textAlign='center' textTransform='uppercase' fontWeight='bold'>
            Programs
          </Typography>
          <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' rowGap={6} columnGap={4}>
            {Programs.map((program: IPrograms, index: number) => (
              <DisplayCard key={index} name={program.name} image={program.image} link={program.link}></DisplayCard>
            ))}
          </Box>
        </Box>
        <Box display='flex' justifyContent={!isMobile ? 'space-between' : 'center'} flexWrap='wrap' rowGap={4} columnGap={12}>
          <Box display='flex' flex='1 1 25%'>
            <NewsPreview title='Latest News' data={News} limit={3} isMobile={isMobile} />
          </Box>
          <Box display='flex' alignItems={!isMobile ? 'initial' : 'center'} flexDirection='column' rowGap={2}>
            <Typography component='h6' variant='h6' textAlign={!isMobile ? 'initial' : 'center'} textTransform='uppercase' fontWeight='bold'>
              Official Student Organizations
            </Typography>
            <Box display='flex' flexDirection='column' rowGap={4}>
              {StudentOrgs.map((studentOrg: IStudentOrgs, index: number) => (
                <Box key={index} display='flex' justifyContent={!isMobile ? 'initial' : 'center'} alignItems='center' flexWrap='wrap' gap={2}>
                  <Image alt={`${studentOrg.name} image`} src={`/images/student-orgs/${studentOrg.image}`} height={50} width={50}></Image>
                  <Typography component='p' variant='body1' textAlign={!isMobile ? 'initial' : 'center'} width={!isMobile ? 'initial' : '100%'}>
                    {studentOrg.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
