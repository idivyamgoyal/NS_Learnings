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
