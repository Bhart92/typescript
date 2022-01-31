import React, { FC } from 'react';
import { withtrackClick } from '../HOC';
import { NewsFeedProps } from './interface';

const NewsFeed: FC<NewsFeedProps> = ({ click }) => {
    return (
        <>
            <h1>NewsFeed Component</h1>
            <h2>Click: {click}</h2>
        </>
    )
}

export default withtrackClick(NewsFeed);
