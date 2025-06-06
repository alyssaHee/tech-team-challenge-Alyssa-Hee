import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import members from '../../members_details.json';
import MemberCard from '../MemberCard/MemberCard';
import 'swiper/css';
import './MemberDisplay.css'

// Sort members data by grouping leaders sharing the same position
const groups = Object.groupBy(members, (member) => member.position);
//console.log(groups);

function MemberDisplay({ member }) {
    
  return (
    <div className="member-display">
      {Object.entries(groups).map(([position, groupMembers]) => (
        <div key={position}>
          <h2 className="member-position">{position}</h2>

          {groupMembers.length === 1 ? (
            // Only one member — show single card
            <MemberCard member={groupMembers[0]} />
          ) : (
            // Multiple members — show carousel
            <Swiper className="carousel" spaceBetween={10} slidesPerView={1}>
              {groupMembers.map((member) => (
                <SwiperSlide key={member.name}>
                  <MemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ))}
    </div>

  );
}

export default MemberDisplay;
