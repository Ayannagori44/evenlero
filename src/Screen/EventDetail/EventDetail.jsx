import React from "react";
import { AiOutlinePlus, AiFillHeart, AiFillCalendar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsBookmarkDash } from "react-icons/bs";
import EventAvatar from "../../Ui/Components/EventAvatar/EventAvatar";

import "./EventDetail.scss";

const EventDetail = () => {
  return (
    <div className="event__details">
      <div className="event__cover">
        <div className="event__nav">
          <AiOutlinePlus className="event__nav-icon" />
          <AiFillHeart
            style={{ color: "red" }}
            className="event__nav-icon heart"
          />
        </div>
      </div>
      <div className="event__info container">
        <span className="event__info-span"></span>
        <div className="event__detail">
          <div className="event__type">
            <h2>Shere Bangla Concert</h2>
            <div className="event__date-location ">
              <div className="event__location event_type">
                <MdLocationPin className="event__info-icon" />
                <p>ABC Avenue, Dhaka</p>
              </div>
              <div className="event__date event_type">
                <AiFillCalendar className="event__info-icon" />
                <p>25-27 October, 22</p>
              </div>
            </div>
          </div>
          <div className="event__price">
            <p>$299 USD</p>
          </div>
        </div>
        <div className="event__progress">
          <div className="event__members">
            <p>
              15.7k+ <span>Members are joined:</span>
            </p>
          </div>
          <div className="event__member-img">
            <img src="https://picsum.photos/id/1/200/300" alt="" />
            <img src="https://picsum.photos/id/1/200/300" alt="" />
            <img src="https://picsum.photos/id/1/200/300" alt="" />
            <img src="https://picsum.photos/id/1/200/300" alt="" />
          </div>
          <div className="event__invitation">
            <p>View All / Invite</p>
          </div>
        </div>
      </div>
      <div className="event__host">
        <div className="event__hoster">
          <EventAvatar />
          <div className="event__hoster-contact"></div>
        </div>
        <div className="event__Desc">
          <h2>Description</h2>
          <p>
            Ultricies arcu venenatis in lorem faucibus lobortis at. East odio
            varius nisl congue aliquam nunc est sit pull convallis magna. Est
            scelerisque dignissim non nibh.... <span>Read More</span>
          </p>
        </div>
        <div className="event__ticket">
          <BsBookmarkDash />
          <button>BUY A TICKET</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
