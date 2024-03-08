import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc,query,where,getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const USER = 'User';

export class User {
  constructor(email, name, password, uuid) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.uuid = uuid;
  }
}

/**
 * Set the uuid to '' when add User.
 * @param {User} User
 * @returns User/null
 */
export const addUser = async (User) => {
  try {
    const resultRef = await addDoc(collection(db, USER), User);
    if(resultRef && resultRef.id){
      //Update the uuid with DocId
      const updatedUUID = { [uuid]: resultRef.id };
      await updateDoc(resultRef, updatedUUID);
      return resultRef;
    }
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * 
 * @returns users/null
 */
export const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, USER));
      const users = querySnapshot.docs.map((doc) => {
        const userData = doc.data();
        return new User(userData.email, userData.name, userData.password, userData.uuid);
      });
      return users;
    } catch (error) {
      return null;
    }
  };

/**
 * 
 * @param {*} uuid 
 * @returns users/null
 */
export const getUserByUUID = async (uuid) => {
  const querySnapshot = await getDocs(query(collection(db, USER, where('uuid', '==', uuid))));
  const userDoc = querySnapshot.docs[0];

  if (userDoc) {
    const userData = userDoc.data();
    return new User(userData.email, userData.name, userData.password, userData.uuid);
  }

  return null; // User with the specified UUID not found
};

/**
 * 
 * @param {*} docId 
 * @param {*} updatedData 
 * @returns boolean
 */
export const updateUser = async (docId, updatedData) => {
  try {
    const resultRef = doc(db, USER, docId);
    await updateDoc(resultRef, updatedData);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 
 * @param {*} uuid 
 * @param {*} updatedData 
 * @returns 
 */
export const updateUserByUUID = async (uuid, updatedData) => {
  const userRef = doc(db, USER, uuid);

  try {
    await updateDoc(userRef, updatedData);
    const updatedUserSnapshot = await getDoc(userRef);
    const updatedUserData = updatedUserSnapshot.data();

    if (updatedUserData) {
      return new User(updatedUserData.email, updatedUserData.name, updatedUserData.password, updatedUserData.uuid);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

/**
 * 
 * @param {*} docId 
 * @returns boolean
 */
export const deleteUser = async (docId) => {
  try {
    const resultRef = doc(db, USER, docId);
    await deleteDoc(resultRef);
    return true
  } catch (error) {
    return false;
  }
};

/**
 * 
 * @param {*} uuid 
 * @returns boolean
 */
export const deleteUserByUUID = async (uuid) => {
  const userRef = doc(db, USER, uuid);

  try {
    await deleteDoc(userRef);
    return true; // Deletion successful
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};