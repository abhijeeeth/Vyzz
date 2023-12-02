'use client'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const softwareDevelopmentLifecycle = [
  {
    phase: 'Requirement Analysis',
    description: `Define the project requirements and objectives. 
      Clearly outline what functionalities the software should have, 
      identify potential challenges, and specify any constraints.`,
  },
  {
    phase: 'Design and Architecture',
    description:
      'Create a comprehensive design and architecture plan for the software. Define the overall structure, data flow, and the relationships between different components.',
  },
  {
    phase: 'Implementation',
    description: `Write code based on the design specifications. 
      Develop and integrate different modules, ensuring they work together seamlessly. 
      Test individual components during the coding process.`,
  },
  {
    phase: 'Testing',
    description: `Thoroughly test the entire software to identify and fix any bugs or issues. 
      Conduct various tests, including unit testing, integration testing, and system testing.`,
  },
  {
    phase: 'Deployment',
    description: `Release the software to the production environment. 
      Ensure a smooth deployment process and monitor the system for any issues that may arise.`,
  },
];
// ... (previous imports)

export default function CustomizedTimeline() {
  return (
    <div className='bg-gray-100 my-6'>
      <h1 className='font-bold text-3xl text-center text-gray-600'>Our Process</h1>

    <Timeline position="alternate">
      {softwareDevelopmentLifecycle.map((step, index) => (
        
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            {/* You can customize the opposite content if needed */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
              {index + 1}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              {step.phase}
            </Typography>
            <Typography>{step.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
      </div>
  );
}
