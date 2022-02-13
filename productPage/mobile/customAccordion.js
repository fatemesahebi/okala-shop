import React, {useState} from 'react';
import {boxSizing, styled} from '@mui/system';
import {Data} from './data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Container, AccordionSection, Wrap, Dropdown} from './index';

const Styledlist = styled('ul')({
    paddingRight: '0',
    listStyle: 'none',
});

const Customli = styled('li')({})

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
                {Data.slice(0, 1).map((items) => {
                    return (
                        <>
                            <Wrap sx={{
                                width: '100%',
                                backgroundColor: "white !important",
                                borderBottom: "1px solid rgba(0,0,0,0.05)"
                            }} onClick={() => toggle(0)} key={0}>
                                <h6>{items.summary}</h6>
                                <span>{clicked === 0 ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
                            </Wrap>
                            {clicked === 0 ? (
                                <Dropdown sx={{
                                    backgroundColor: "white !important"
                                }}>
                                    <Styledlist>
                                        {items.detail.map((item, index) => (
                                            <Customli sx={{
                                                margin: "1px",
                                                backgroundColor: (index % 2 === 0) ? "rgba(240, 240, 240, 1)" : "rgba(248, 248, 248, 1)"
                                            }}>
                                                {item.detail}
                                            </Customli>
                                        ))}
                                    </Styledlist>
                                </Dropdown>
                            ) : null}
                        </>
                    );
                })}
                {
                    Data.slice(1, 2).map((item) => {
                        return (
                            <>
                                <Wrap sx={{
                                    width: '100%',
                                    backgroundColor: "white !important"
                                }} onClick={() => toggle(1)} key={1}>
                                    <h6>{item.summary}</h6>
                                    <span>{clicked === 1 ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
                                </Wrap>
                                {clicked === 1 ? (
                                    <Dropdown sx={{
                                        backgroundColor: "white !important"
                                    }}>
                                        <p>{item.detail}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })
                }

            </Container>
        </AccordionSection>
    );
};

export default Accordion;