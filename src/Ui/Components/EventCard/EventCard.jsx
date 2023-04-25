import React from "react";

import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

import "./EventCard.scss";

const EventCard = ({ horizontal }) => {
  if (!horizontal) {
    return (
      <article className="event__card smooth-transition">
        <div className="img-box">
          <button
            onClick={(e) => saveEvent(e)}
            className="save-event-btn center"
          >
            <AiFillHeart style={{ fill: "red", fontSize: "2rem" }} />
          </button>

          <img
            className="rounded-2xl"
            src="https://picsum.photos/400/250"
            alt="event card"
          />
        </div>

        <div className="event__card-content">
          <h3>International Band Music Concert</h3>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="flex">
              <BsFillCalendar2DateFill
                style={{
                  fill: "var(--primary)",
                  marginRight: ".4rem",
                  fontSize: "1.6rem",
                }}
              />
              12 October,22
            </p>
            <p className="flex">
              <MdLocationOn
                style={{
                  fill: "var(--primary)",
                  marginRight: ".4rem",
                  fontSize: "1.6rem",
                }}
              />
              ABC Avenue,Basni
            </p>
          </div>
        </div>

        <div className="event__card-join">
          <h4>+ 24 Members Joined</h4>
          <button className="btn">Join Now</button>
        </div>
      </article>
    );
  } else {
    <div className="smooth-transition mb-5 flex w-full cursor-pointer items-center justify-between rounded-2xl bg-light1 py-1 px-2 shadow-[3px_5px_5px_rgba(0,0,0,0.1)]">
      <div className="border-left-after mr-4 flex w-[72%] items-center">
        <img
          className="h-16 w-16 rounded-xl object-cover object-center"
          src="https://picsum.photos/400/250"
          alt=""
        />
        <h1 className="my-2.5 ml-3 text-lg font-bold">Designers Meetup 2020</h1>
      </div>
      <div className="flex w-[20%] flex-col justify-center">
        <h2 className="text-center text-sm font-bold text-primary">$10.50</h2>
        <button className="btn btn-sm mt-2">Join</button>
      </div>
    </div>;
  }
};

export default EventCard;
