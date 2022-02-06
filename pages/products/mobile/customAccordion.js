import React, { useState } from 'react';
import { boxSizing, styled } from '@mui/system';
import { Data } from '../data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Container,AccordionSection,Wrap,Dropdown } from './index';


const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (

        <AccordionSection>
            <Container>
                {Data.map((item, index) => {
                    return (
                        <>
                            <Wrap sx={{width:'100%'}} onClick={() => toggle(index)} key={index}>
                                <h6>{item.summary}</h6>
                                <span>{clicked === index ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
                            </Wrap>
                            {clicked === index ? (
                                <Dropdown>
                                    <p>{item.detail}</p>
                                </Dropdown>
                            ) : null}
                        </>
                    );
                })}
            </Container>
        </AccordionSection>
    );
};

export default Accordion;