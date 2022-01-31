import React, { FC } from 'react';
import { withtrackClick } from '../HOC';
import { ProfileProps } from './interface';

const Profile: FC<ProfileProps> = ({ click }) => {
    return (
        <>
            <h1>Profile Component</h1>
            <h2>Click: {click}</h2>
        </>
    )
}

export default withtrackClick(Profile);
