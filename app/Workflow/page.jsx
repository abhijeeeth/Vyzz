'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledChildDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const ArrowIcon = styled(FaAngleRight)`
  width: 20px;
  height: 20px;
  fill: #333;
  transform: rotate(90deg);
`;

const ChildDivContent = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const WebProjectLifeCycle = () => {
  const lifeCycleStages = [
    { stage: 'Information Gathering & Requirements Analysis', link: '/gathering' },
    { stage: 'Planning & Design', link: '/planning' },
    { stage: 'Development & Implementation', link: '/development' },
    { stage: 'Testing & Quality Assurance', link: '/testing' },
    { stage: 'Deployment & Maintenance', link: '/deployment' },
  ];

  return (
    <StyledMainDiv>
      <h1>Web Project Life Cycle</h1>
      {lifeCycleStages.map((stage, index) => (
        <StyledChildDiv key={index}>
          <Link href={stage.link}>
            <ArrowIcon />
          </Link>
          <ChildDivContent>{stage.stage}</ChildDivContent>
        </StyledChildDiv>
      ))}
    </StyledMainDiv>
  );
};

export default WebProjectLifeCycle;
