import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import members from "../../members_details.json";
import MemberCard from "../MemberCard/MemberCard";
import "./MemberDisplay.css";

// Sort members data by grouping leaders sharing the same position
const groups = Object.groupBy(members, (member) => member.position);
//console.log(groups);

function MemberDisplay({ member }) {
  return (
    <div className="member-display">
      {Object.entries(groups).map(([position, groupMembers]) => (
        // Convert groups object into an array and create a section for each position
        <div key={position}>
          <h2 className="member-position">{position}</h2>

          {groupMembers.length === 1 && (
            // Only one member — show single card
            <MemberCard member={groupMembers[0]} />
          )}

          {groupMembers.length > 1 && (
            // Multiple members — show carousel
            <Swiper
              className="carousel"
              spaceBetween={5}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {groupMembers.map((member) => (
                <SwiperSlide key={member.name}>
                  <MemberCard member={member} />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
              <div className="swipe-arrow" />
            </Swiper>
          )}
        </div>
      ))}
    </div>
  );
}

export default MemberDisplay;
