import {Commentinfosec, Ratesinfo, Ratesprogress, Rateswrapper, Topsection} from "./index";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import chat from "../../public/SVG/chat.svg"
import star from "../../public/SVG/star.svg"

import * as React from "react";

export default function Comments(){
    return(
        <div>
            <Topsection>
                <ArrowForwardOutlinedIcon/>
            </Topsection>
            <Commentinfosec>

            </Commentinfosec>
            <box sx={{
                borderBottom: '1px solid rgba(240, 240, 240, 1)',
                padding:'17px'}}>
                <Rateswrapper>
                    <Box>
                        <Box>
                            <image src{chat}/>

                        </Box>
                        <span>
                            1 کاربر پیشنهاد کرده‌اند
                        </span>
                    </Box>
                    <Box>
                        <Box>
                            <image src={star}/>
                        </Box>
                        <span>
                            1 کاربر امتیاز داده‌اند
                        </span>
                    </Box>
                </Rateswrapper>
            </box>
            <Ratesinfo>
                <span style={{
                    color: 'rgba(22, 22, 22, 1)',
                    fontSize: '1rem',
                    fonWeight: '700',
                    lineHeight: '24px',
                    marginLeft:' 17px',
                }}>
                    4.0
                </span>
                <image src{star} />
                <image src{star} />
                <image src{star} />
                <image src{star} />
                <image src{star} />
                <span style={{
                    color: 'rgba(104, 104, 104, 1)',
                    fontSize:' 0.75rem'}}>
                    از 1 نفر
                </span>
            </Ratesinfo>
            <Ratesprogress>

            </Ratesprogress>
        </div>

    )
}