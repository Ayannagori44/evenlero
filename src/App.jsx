import React from "react";
import Home from "./Screen/Home/Home";
import CreateEvent from "./Screen/CreateEvent/CreateEvent";
import EventDetail from "./Screen/EventDetail/EventDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/eventdetail" element={<EventDetail />} />
      </Routes>

      {/* <Route
          path="/explore"
          element={<Explore title="Events in Hydrabad" />}
        />
        <Route path="/eventsubmitionform" element={<EventEntryForm />} />
        <Route path="/about" element={<Loading />} />
        <Route path="/eventdetail:eventtitle" element={<EventDetailPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </div>
  );
};

export default App;
