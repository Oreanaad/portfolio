import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import { TimeLineContainer, TimeLineHeader } from './styled-components';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export default function CustomizedTimeline() {
    return (
        <TimeLineContainer >
            <TimeLineHeader>
                <h4><span>.</span>TIMELINE</h4>
            </TimeLineHeader>
            <Timeline position="alternate" sx={{px:0}}>

                    
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        
                        variant="body2"
                    >
                        2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <ComputerIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <h1 >Junior web Developer</h1>
                        <p  >On my own!</p>
                    </TimelineContent>
                </TimelineItem>


                    
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            
                            variant="body2"
                        >
                            2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <AdbIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent >
                            <h1 >JavaScript course</h1>
                            <p  >Develop of different projects</p>
                        </TimelineContent>
                    </TimelineItem>




                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                       
                    >
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                             <DevicesIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                        Design certification
                        </h1>
                        <p>Specialist in Adobe</p>
                    </TimelineContent>
                </TimelineItem>

                 <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        
                    >
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot  >
                            <Diversity3Icon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                           Neural Networks with Python
                        </h1>
                        <p >Graduated from UCV university</p>
                    </TimelineContent>
                </TimelineItem>




                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        
                        variant="body2"
                        
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                             <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                           Sys Enginner
                        </h1>
                        <p >Graduated from UBA university</p>
                    </TimelineContent>
                
                </TimelineItem>



                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" >
                             <SchoolIcon />
                           
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                           Web design diploma
                        </h1>
                        <p >Graduated from UBA university </p>
                    </TimelineContent>
                </TimelineItem>
                


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        
                        variant="body2"
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <RocketLaunchIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                            React Developer
                        </h1>
                        <p >Learning by my own!</p>
                    </TimelineContent>
                </TimelineItem>


               
      
            
             <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        2025
                     </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" >
                             <SchoolIcon />
                           
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                           Biomedical engineer diploma
                        </h1>
                        <p >Graduated from USB university</p>
                    </TimelineContent>
                </TimelineItem>

                  </Timeline>
        </TimeLineContainer>

        

    );
}