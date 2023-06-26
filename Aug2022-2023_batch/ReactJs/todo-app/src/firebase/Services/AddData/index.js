import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../AppInit";

const firebaseDBInstance = getFirestore(app);

export const addData = async (todoData) => {
  const response = { success: null, todoId: null };

  try {
    const docRef = await addDoc(collection(firebaseDBInstance, "todos"), todoData);
    console.log("### Document written with ID: ", docRef);
    response.success = true;
    response.todoId = docRef.id;
  } catch (e) {
    console.error("### Error adding document: ", e);
    response.success = false;
  }

  return response;
};
