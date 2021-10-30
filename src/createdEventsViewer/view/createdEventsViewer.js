import React, { useEffect, useState } from "react";

import { AsyncView } from "../../shared/asyncView";
import { EventsList } from "../components";

import { fetchEvents } from "../data/eventsViewerData";

const CreatedEventsViewer = () => {
  const [asyncStatus, setAsyncStatus] = useState("ok");
  const [data, setData] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      setData(null);
      setAsyncStatus("loading");

      let responseData = null;
      try {
        responseData = await fetchEvents();
      } catch (err) {
        setAsyncStatus("error");
        setData(["Something went wrong. Please try again later."]);
        return;
      }
      setAsyncStatus(responseData.status);
      setData(responseData.data);
    };
    getEvents();
    return () => setData(null);
  }, []);

  return (
    <section>
      <AsyncView
        status={asyncStatus}
        errors={data}
        clearError={setAsyncStatus}
      />

      <h2>created events</h2>
      {asyncStatus === 'ok' && data && <EventsList events={data} />}
    </section>
  );
};

export default CreatedEventsViewer;
