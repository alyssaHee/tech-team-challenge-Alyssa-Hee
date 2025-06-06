import React from 'react';
import './PageTitle.css';

function PageTitle({ text }){
    return (
        <div className = "page-title">
            <h1>{text}</h1>
        </div>
    );
}

export default PageTitle;

