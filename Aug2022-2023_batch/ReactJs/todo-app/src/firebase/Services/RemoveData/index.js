import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { app } from "../../AppInit";

const firebaseDBInstance = getFirestore(app);

export const removeTodo = async (todoId) => {
  const response = { success: false };

  try {
    const docRef = await deleteDoc(doc(firebaseDBInstance, "todos", todoId));
    console.log("### deleteDoc success: ", docRef);
    response.success = true;
  } catch (e) {
    console.log("### error while deleting todo: ", todoId, " ======error: ", e);
  }

  return response;
};
