import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

// Create operation
export const addTodo = async (title, description) => {
  try {
    const todoRef = await addDoc(collection(db, 'todos'), { title, description });
    return todoRef.id;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error; // Propagate the error for handling in the component
  }
};

// Read operation
export const getTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting todos:', error);
      throw error; // Propagate the error for handling in the component
    }
  };

// Update operation - update the document of collection.
export const updateTodo = async (todoId, updatedData) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await updateDoc(todoRef, updatedData);
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error; 
  }
};

// Delete operation
export const deleteTodo = async (todoId) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await deleteDoc(todoRef);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error; // Propagate the error for handling in the component
  }
};