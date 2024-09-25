import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccordion } from "../ReduxHomeFile/accordionSlice";

export default function Accordion() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.accordion.items);

  const handleToggle = (id) => {
    dispatch(toggleAccordion(id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div
            onClick={() => handleToggle(item.id)}
            style={{
              cursor: "pointer",
              backgroundColor: "#f1f1f1",
              padding: "10px",
              margin: "5px 0",
            }}
          >
            {item.title}
          </div>
          {item.isOpen && (
            <div style={{ padding: "10px", backgroundColor: "#e2e2e2" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
