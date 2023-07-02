import Banner from '@/shared/components/Banner';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IProgramsOffered {
  programType: string;
  programs: string[];
}

function Admission() {
  const admissionRequirements: string[] = [
    'Form 138 (at least the first two quarters of the current school year)',
    '2 identical 2X2 pictures',
    '2 recommendation letters (1. Principal & 2. Adviser/Guidance Counselor)',
    'NSO birth certificate',
  ];
  const programsOffered: IProgramsOffered[] = [
    {
      programType: '5 Year Programs',
      programs: [
        'Bachelor of Science in Electronics Engineering (BS EcE)',
        'Bachelor of Science in Mechanical Engineering (BS ME)',
        'Bachelor of Science in Computer Engineering (BS CpE)',
        'Bachelor of Science in Architecture (BS Archi)',
      ],
    },
    {
      programType: '4 Year Programs',
      programs: [
        'Bachelor of Science in Information Technology (BS IT)',
        'Bachelor of Science in Computer Science (BS CS)',
        'Bachelor of Science in Entrepreneurship (BS Entrep)',
      ],
    },
    {
      programType: '2 Year Programs',
      programs: ['Associate in Computer Technology (ACT)'],
    },
  ];

  return (
    <Box>
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        Admission
      </Typography>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box display='flex' flexDirection='column' gap={2}>
          <Typography component='p' variant='body1' fontWeight='bold'>
            Ready to come home? Here are the steps to enroll in Don Bosco Mandaluyong...
          </Typography>
          <Typography component='p' variant='body1'>
            <strong>Step 1: </strong>Visit the Admission Office for inquiries, forms and list of requirements or check our website at
            dbmanda.one-bosco.org. (Admission office is open Monday-Friday from 8AM-5PM)
          </Typography>
          <Typography component='p' variant='body1'>
            <strong>Step 2: </strong>Submit the complete requirements to the Admission office and get entrance test schedule. Get the date of entrance
            test & interview.
          </Typography>
          <Typography component='p' variant='body1'>
            The BS in Information Technology program deals with the study, design, and construction of information systems and infrastructures to
            support the decision process of a particular sector or area of the society. It aims to provide improvement and uplift human society toward
            making the access and sharing of data, information or knowledge in repositories and knowledge networks possible, to contribute social
            progress and the quest of humanity toward new knowledge.
          </Typography>
          <Typography component='p' variant='body1' fontWeight='bold'>
            Requirements:
          </Typography>
          <List sx={{ py: 0 }}>
            {admissionRequirements.map((req: string, index: number) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <Typography component='p' variant='body1'>{`• ${req}`}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography component='p' variant='body1'>
            <strong>Step 3: </strong>Take the entrance test and go for interview (generally on the same day).
          </Typography>
          <Typography component='p' variant='body1'>
            <strong>Step 4: </strong>If enrollee passes entrance exam make a reservation and enroll on the specified date
          </Typography>
        </Box>
        <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' gap={4}>
          <Box display='flex' flexDirection='column' rowGap={2}>
            <Typography component='h5' variant='h5' fontWeight='bold'>
              Programs Offered
            </Typography>
            {programsOffered.map((programOffered: IProgramsOffered, index: number) => (
              <Box key={index}>
                <Typography component='p' variant='body1' fontWeight='bold'>
                  {programOffered.programType}
                </Typography>
                <List sx={{ py: 0 }}>
                  {programOffered.programs.map((program: string, index: number) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <Typography component='p' variant='body1'>{`• ${program}`}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Image alt='admission image' src='/images/admission/side-pic-1.jpg' height={350} width={300}></Image>
        </Box>
      </Container>
    </Box>
  );
}

export default Admission;
