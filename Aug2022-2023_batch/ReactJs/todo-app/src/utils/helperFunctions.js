import { PRIORITY_LABEL_ORDER } from "../configs";

/**this function sorts the todos based on whether they are marked done or not, if marked done, then they will arranged at the very bottom of the sorted array
 * @param firstTodo firstTodo which will be sorted and arranged
 * @param secondTodo secondTodo which will be sorted and arranged wrt `firstTodo`
 *
 * @returns number which indicated whether the sorting is before(-1), after(1) or at the same level (0)
 */
export const sortTodosBasedOnDone = (firstTodo, secondTodo) => {
  if (firstTodo.isDone) {
    return 1;
  } else if (secondTodo.isDone) {
    return -1;
  } else {
    return PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority];
  }
};

/**this function will save data in local-storage after stringifying
 * @param key the key associated to the value
 * @param value the data which will be saved in local-storage and binded with the `key`
 * 
 * @returns void
 */
export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

/** this function will get the value which is associate and saved wrt the key after parsing from the JSON
 * @param key the key-value against which data needs to be fetched
 * 
 * @returns data associated with the `key`
 */
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

/** this function will delete the data associated with the `key`
 * @param key the key value whose data needs to be deleted
 * 
 * @returns void
 */
export const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
}