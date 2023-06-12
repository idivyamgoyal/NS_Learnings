import React from "react";
import { DEFAULT_PRIORITY_DISPLAY_ORDER, PRIORITY_ORDERS } from "../../configs";

export const PriorityOrder = (props) => {
  return (
    <div>
      <select
        style={{ padding: "5px" }}
        onChange={(event) => {
          event.preventDefault();
          props.updateDisplayOrder(event.target.value);
        }}
      >
        <option
          value={PRIORITY_ORDERS.LOW}
          selected={DEFAULT_PRIORITY_DISPLAY_ORDER === PRIORITY_ORDERS.LOW}
        >
          {PRIORITY_ORDERS.LOW}
        </option>
        <option
          value={PRIORITY_ORDERS.MID}
          selected={DEFAULT_PRIORITY_DISPLAY_ORDER === PRIORITY_ORDERS.MID}
        >
          {PRIORITY_ORDERS.MID}
        </option>
        <option
          value={PRIORITY_ORDERS.HIGH}
          selected={DEFAULT_PRIORITY_DISPLAY_ORDER === PRIORITY_ORDERS.HIGH}
        >
          {PRIORITY_ORDERS.HIGH}
        </option>
      </select>
    </div>
  );
};
