import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import {styled, Tooltip} from "@mui/material";
import {Timeline, TimelineContent} from "@mui/lab";
import React from "react";

const History = styled('div')(({ theme }) => ({
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'gray',
    },
}));

const Activity = styled(TimelineContent)(({ theme }) => ({
    fontSize: 18,
    width: 600
}));

const ActivityYear = styled(TimelineContent)(({ theme }) => ({
    fontSize: 14,
    textAlign: 'center',
    padding: '6px 0px 0px 0px',
}));

const InfoTip = styled(Tooltip)(({ theme }) => ({
    fontSize: 20,
    marginLeft: 5
}));

const ActivityTimeline: React.FC = () => {
    return(
       <>
           <History sx={{
               maxHeight: 500,
               width: '100%',
               display: 'flex',
               overflowX: 'hidden'
           }}>
               <Timeline
                   position='alternate'
               >
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Crossroads Event
                           <InfoTip title={"Een week lang van activiteiten, workshops en infosessies die studenten voorbereiden op het Research Project en het bedrijfsleven"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Projectweek
                           <InfoTip title={"Een week lang van activiteiten, workshops en infosessies die studenten voorbereiden op het Research Project en het bedrijfsleven"} >
                               <InfoIcon/>
                           </InfoTip></Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie Intracto/Infinite Opportunity’s
                           <InfoTip title={"Een seminarie over Clean Code door Joeri Timmermans"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie Solita 1
                           <InfoTip title={"Een sessie over iPaaS, Azure en Snaplogic door Jens Lambrechts en zijn collega’s"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>POP-sessie Brain aan het werk! Niet storen!
                           <InfoTip title={"Een sessie over hoe we als maatschappij digitaal verbonden zijn en hoe we moeten omgaan met al die prikkels"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>POP-sessie POPing
                           <InfoTip title={"Een sessie over persoonlijke ontwikkeling en welke hard of soft skills we nodig hebben voor onze dromen"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie Solita 2
                           <InfoTip title={"Een sessie over iPaaS, Azure en Snaplogic door Jens Lambrechts en zijn collega’s"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie Appwise
                           <InfoTip title={"Een sessie over Vue door Robbe Vaes"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Innovatieroute UX Design
                           <InfoTip title={"Meerdere sessies over UX Design. Deze worden gegeven door verschillende bedrijven"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>POP-sessie My Team and I
                           <InfoTip title={"Een sessie met activiteiten rond teambuilding"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie IO Digital
                           <InfoTip title={"Een sessie over automated testing door Kenny Derwael"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie ACA Group
                           <InfoTip title={"Een sessie over Infrastructure as Code en BitBucket door Peter Jans"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie Harmony Group
                           <InfoTip title={"Een sessie over Low Code door Vermeulen Stef"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>Seminarie IT Licious
                           <InfoTip title={"Een sessie over Flutter door Eric Kok"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
                   <TimelineItem>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <Activity>PXL Hackathon Ergotherapie en Healthcare
                           <InfoTip title={"Bij deze hackathon heb ik in een groep een digitale oplossing in een korte tijdsperiode moeten maken voor studenten van Ergotherapie"} >
                               <InfoIcon/>
                           </InfoTip>
                       </Activity>
                   </TimelineItem>
               </Timeline>
               <Timeline sx={{
                   [`& .${timelineItemClasses.root}:before`]: {
                       flex: 0,
                       padding: 0,
                   },
               }}>
                   <TimelineItem>
                       <ActivityYear>2/12/2021</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>14/2/2022 <br/>
                           tot <br/>
                           18/2/2022
                       </ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>1/3/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>5/3/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>8/3/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear></ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>22/3/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>17/5/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>29/09/2022 <br/>
                           13/10/2022 <br/>
                           20/10/2022
                       </ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>19/10/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>9/11/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>16/11/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>23/11/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>7/12/2022</ActivityYear>
                   </TimelineItem>
                   <TimelineItem>
                       <ActivityYear>21/2/2023 <br/>
                           22/2/2023
                       </ActivityYear>
                   </TimelineItem>
               </Timeline>
           </History>
       </>
    )
}

export default ActivityTimeline;