import React from 'react';
import './MemberCard.css';

function MemberCard({ member }){
    return(
       <div className="member-card">
            <img
                className="member-img"
                src={member.picture}
                alt={member.name}
            />
            <h3 className="member-name">{member.name}</h3>
       </div>
        
    )
}

export default MemberCard;