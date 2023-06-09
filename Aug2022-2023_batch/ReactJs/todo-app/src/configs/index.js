export const PRIORITY_ORDERS = Object.freeze({
  LOW: "Low",
  MID: "Mid",
  HIGH: "High",
});

export const DEFAULT_PRIORITY_DISPLAY_ORDER = PRIORITY_ORDERS.HIGH;

export const PRIORITY_LABEL_ORDER = {
  [PRIORITY_ORDERS.HIGH]: 1,
  [PRIORITY_ORDERS.MID]: 2,
  [PRIORITY_ORDERS.LOW]: 3,
};

export const TODOD_KEYS = {
  saveTodoKey: "saved-todos-local-storage",
};