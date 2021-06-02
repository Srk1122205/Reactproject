import React from 'react'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import { reviews } from "../../data/reviews";
import { ReviewCard } from "./review-card";
import { NewReview } from "./review-card";
import { useState } from "react";

export function ReviewListing() {
    const [tab, setTab] = useState(0)

    let clickTab = (event, tab) => {
        setTab(tab)
    }

    return (
        <Container>
            <Tabs value={tab} onChange={clickTab}>
                <Tab label='Product Reviews'></Tab>
                <Tab label='Write Reviews'></Tab>
            </Tabs>
            <TabPanel value={tab} index={0} />
        </Container>

    )
}


let TabPanel = (props) => {
    const { value, index } = props
    return (
        <>
            {
                value === index ? (
                    reviews.map(review => <ReviewCard review={review} />)
                ) : (
                    <NewReview />
                )
            }
        </>
    )
}
