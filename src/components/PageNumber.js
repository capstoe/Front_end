import React from 'react';
import { NavLink } from 'react-router-dom';

function PageNumber({ page }) {
    return (
        <NavLink to={`/freeboard/${page}`}>{page}</NavLink>
    );
}

export default PageNumber;
