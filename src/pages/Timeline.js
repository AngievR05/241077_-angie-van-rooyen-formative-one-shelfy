import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaBook } from "react-icons/fa";
import "../css/timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      date: "2024-01-01",
      title: "Book Release: The Future of AI",
      description: "This book gained popularity with 10,000+ reviews.",
    },
    {
      date: "2024-02-15",
      title: "Trending Book: Deep Learning Mastery",
      description: "Became the top-selling programming book in February.",
    },
    {
      date: "2024-03-10",
      title: "Award: Best Sci-Fi Novel",
      description: "The book 'Cyberworld 2099' won a major award.",
    },
  ];

  return (
    <div className="timeline">
      <Sidebar />
      <div className="main-content">
        <h2>Book Trends Over Time</h2>
        
        <VerticalTimeline>
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.date}
              iconStyle={{ background: "#652E98", color: "#fff" }}
              icon={<FaBook />}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
