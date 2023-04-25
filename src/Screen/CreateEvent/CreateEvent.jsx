import React from "react";
import Navbar from "../../Ui/Components/Navbar/Navbar";

import { AiOutlinePlus } from "react-icons/ai";

import "./CreateEvent.scss";

const CreateEvent = () => {
  return (
    <div className="event__creation container">
      <Navbar title="Create New Event" />
      <div className="event__covers">
        <div className="eventLg__cover">
          <AiOutlinePlus className="bigger" />
          <h3>Add Cover Photos</h3>
        </div>
        <div className="event__cover-optional">
          <AiOutlinePlus className="plus-icon" />
          <AiOutlinePlus className="plus-icon" />
          <AiOutlinePlus className="plus-icon" />
          <AiOutlinePlus className="plus-icon" />
        </div>
      </div>

      <div className="event__creation-form">
        <h2>Event Details</h2>
        <form>
          <label htmlFor="name">
            Event Name<span>*</span>
          </label>
          <input type="text" placeholder="Type your Event name" id="name" />

          <label htmlFor="type">
            Event Type<span>*</span>
          </label>
          <input type="text" placeholder="Choose Event Type" id="type" />

          <label htmlFor="date">
            Select Date And Time<span>*</span>
          </label>
          <input type="date" id="date" />

          <label htmlFor="event__desc">
            Event Description<span>*</span>
          </label>
          <textarea
            name=""
            id="event__desc"
            cols="49"
            rows="6"
            placeholder="Type your event description"
          ></textarea>

          <button>PUBLISH NOW</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
