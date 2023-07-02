import Banner from '@/shared/components/Banner';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function About() {
  const coreValues: string[] = [
    'Faith (God fearing, witness to gospel values, charitable, Marian)',
    'Integrity (honesty, responsibility, accountability, transparency)',
    'Enterprise (creative, resourceful, innovative, initiative,optimist, lifelong learner, leader)',
    'Collaboration (collaborative, cooperative)',
    'Service (competent; professional; concern for stakeholders, community and environment, nationalistic, just, leader)',
  ];
  const [screen, setScreen] = useState<string>('desktop');

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setScreen('desktop');
    } else if (window.innerWidth <= 767 && window.innerWidth >= 470) {
      setScreen('tablet');
    } else if (window.innerWidth < 470) {
      setScreen('mobile');
    }
  };

  return (
    <Box>
      <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' my={4}>
        About Us
      </Typography>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' columnGap={8} rowGap={4}>
          <Box display='flex' flexDirection='column' flex='1 1 45%' rowGap={2}>
            <Typography component='p' variant='body1' textAlign='center' textTransform='uppercase' fontWeight='bold'>
              Vision Mission
            </Typography>
            <Typography component='p' variant='body1'>
              We are an ASEAN - recognized and learner-centered institute of technological and technical education. Following the Salesian charism, we
              form an Educative-Pastoral Community of lifelong learners and agents of social change. Faithful to Catholic teachings, we champion
              holistic personal growth and integral ecology. Mindful of our Filipino heritage, we promote active participation and collaboration of
              all to uphold social justice and equity.
              <br />
              <br />
              We work for total human development, by providing an academically vigorous and innovative environment that forms the young to be
              qualified and competent workers, entrepreneurs and professionals who embody the ideals of justice with charity, prosperity with
              integrity, and technology with a soul.
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' flex='1 1 45%' rowGap={2}>
            <Typography component='p' variant='body1' textAlign='center' textTransform='uppercase' fontWeight='bold'>
              Core Values
            </Typography>
            <List sx={{ py: 0 }}>
              {coreValues.map((coreValue: string, index: number) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <Typography component='p' variant='body1'>{`• ${coreValue}`}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' rowGap={2}>
          <Typography component='h4' variant='h4' textAlign='center' textTransform='uppercase' fontWeight='bold' mt={4}>
            History
          </Typography>
          <Box display='flex' alignItems='center' flexWrap='wrap' rowGap={2} columnGap={8}>
            <Box display='flex' flexDirection='column' flex='1 1 35%' rowGap={2}>
              <Typography component='p' variant='body1' textTransform='uppercase' fontWeight='bold'>
                Asilo de Mandaloya
              </Typography>
              <Typography component='p' variant='body2'>
                1883
              </Typography>
              <Typography component='p' variant='body1'>
                This is Don Bosco Technical College in Mandaluyong.
              </Typography>
              <Typography component='p' variant='body1'>
                It was established only in 1953.
              </Typography>
              <Typography component='p' variant='body1'>
                Prior to this, a Spanish Augustinian Convent once stood here built in 1716 when Mandaluyong was still a Barrio of Sta Ana,an
                indenpendent town then from Manila. In 1883,the Philippine Augustinian Province requested the Spanish beatas of Barcelona to take
                charge of the newly established Casa Asilo de Nuestra Señora de la Consolación de Mandaloya.
              </Typography>
              <Typography component='p' variant='body1'>
                In short, Asilo De Mandaluyong. 6 beatas, including the blood sisters Rita and Consuelo Barceló accepted the invitation and set up a
                new beaterio with orphanage in the former Casa Hacienda of the Augustinians. This was the nucleus of the present Augustinian Sisters
                of Our Lady of Consolation (ASOLC). Mother Consuelo Barcelo y Pages stayed here for 16 years (1883–1899). She co-founded the
                Augustinian Sisters of Our Lady of Consolation along with her sister, the Spanish nun Servant of God Madre Rita Barcelo y Pages.
              </Typography>
              <Typography component='p' variant='body1'>
                It opened on December 26, 1884 and the sponsor was Doña Maria del Carmen Ayala de Roxas,wife of Don Pedro Roxas and great grandmother
                of cousins Don Enrique and Don Jaime Zobel De Ayala.
              </Typography>
            </Box>
            <Box display='flex' flex='1 1 20%' justifyContent='center'>
              <Image
                alt='about image'
                src='/images/about/side-pic-1.jpg'
                height={screen === 'desktop' ? 500 : screen === 'tablet' ? 300 : 200}
                width={screen === 'desktop' ? 650 : screen === 'tablet' ? 450 : 350}
              ></Image>
            </Box>
          </Box>
          <Typography component='p' variant='body1'>
            At the Asilo, she provided the children with food, shelter, clothing, education they needed. She also spent a great deal of time giving
            music lessons. Early in the 20th century, the building became the San Carlos Seminary, home for the formation of the local clergy. One of
            them was Rufino Cardinal Santos, the first Filipino cardinal of the Church. Dn Bosco Mandaluyong opened as a school aptly named "Don Bosco
            Technical Institute–Mandaluyong on June 3,1953 with 47 first-year high school students. But on August 19, 1896, The Katipunan was
            discovered here. Teodoro Patiño ,a printing press worker for the Diario De Manila from Tondo had a misunderstanding with a fellow
            Katipunero. He went to the Asilo to tell his sister Honoria Patiño who was living with the nuns about the existence of the KKK. Teodoro
            Patiño would like to bring her out and escape for he believe that the Katipuneros might attack the Asilo. It upset Honoria and told the
            orphanage’s Mother Superior, Sor Teresa de Jesus. Sor Teresa suggested they seek the advice of Father Mariano Gil, the parish priest of
            Tondo. After hearing Teodoro Patiño’s revelations, Father Mariano Gil accompanied by several Guardias Civiles immediately searched the
            premises of Diario de Manila and found evidence of the Katipunan’s existence. The Governor General was quickly informed. Fearing reprisals
            from the revolutionaries upon the discovery of the Katipunan in 1896, the Barcelo sisters and the Filipino beatas prayed ardently to their
            patroness, Our Lady of Consolation. No untoward incident occurred anywhere near the premises of the orphanage. In 1898 , Mother Consuelo
            was already the superior of the Colegio-Asilo while Mother Rita was the mistress of novices.
          </Typography>
          <Typography component='p' variant='body1'>
            During the Filipino-American war, Mother Consuelo and Mother Rita, the sisters and their almost 200 orphan-wards left the Asilo on June
            11, 1898. They fled towards Manila. When the Americans came, the Augustinian provincial officially dissolved the sisters’ community, as
            well as their Colegio-Asilo De Mandaluyong. Mother Rita and Mother Consuelo, left the Philippines for Spain on March 13, 1899.
          </Typography>
          <Typography component='p' variant='body1'>
            So the Asilo became a Seminary in the early 1900s
          </Typography>
          <Typography component='p' variant='body1'>
            Then Don Bosco in 1953.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
