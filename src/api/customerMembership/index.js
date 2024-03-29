import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc,query,where,getDoc } from 'firebase/firestore';
import {db} from '../../config'

const CUSTOMER_MEMBERSHIP = 'CustomerMembership';

export class CustomerMembership {
  constructor(uuid, customerName, membershipId, pointToReach, currentPoint, expiryDate, startDate, duration,membershipCode,status,reward) {
    this.uuid = uuid; //uuid refer to email of current user.
    this.customerName = customerName;
    this.membershipId = membershipId;
    this.pointToReach = pointToReach;
    this.currentPoint = currentPoint;
    this.expiryDate = expiryDate;
    this.startDate = startDate;
    this.reward = reward;
    this.duration = duration;
    this.membershipCode = membershipCode;//Unique generated.
    this.status = status;
  }
}

/**
 * 
 * set the membershipId to '' when first created
 * 
 * @param {CustomerMembership} CustomerMembership
 * @returns CustomerMembership/null
 */
export const addCustomerMembership = async (CustomerMembership) => {
  try {
    const resultRef = await addDoc(collection(db, CUSTOMER_MEMBERSHIP),JSON.parse(JSON.stringify(CustomerMembership)));
    if(resultRef && resultRef.id){
       //Update the uuid with DocId
       const updatedMemberShipID = { ['membershipId']: resultRef.id };
       await updateDoc(resultRef, updatedMemberShipID);
      return resultRef;
    }
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * 
 * @returns CustomerMembership/null
 */
export const getCustomerMemberships= async () => {
    try {
      const memberships = [];

      const querySnapshot = await getDocs(collection(db, CUSTOMER_MEMBERSHIP));
      querySnapshot.docs.map((doc) => {
        const membershipData = doc.data();
        const customerMembership =new CustomerMembership( 
          membershipData.uuid,
          membershipData.customerName,
          membershipData.membershipId,
          membershipData.pointToReach,
          membershipData.currentPoint,
          membershipData.expiryDate,
          membershipData.startDate,
          membershipData.duration,
          membershipData.membershipCode,
          membershipData.status,
          membershipData.reward
        );
        memberships.push(customerMembership)
      });

      return memberships;
    } catch (error) {
      return null;
    }
  };

/**
 * 
 * @param {*} uuid 
 * @returns CustomerMembership/null
 */
export const getCustomerMembershipByUUID = async (uuid) => {
  try {
    const memberships = [];
    //::Todo: Change it to use query methods.
    // const query = doc(collection(db,CUSTOMER_MEMBERSHIP), where("uuid", "!=", uuid))
    const querySnapshot = await getDocs(collection(db, CUSTOMER_MEMBERSHIP),where('uuid', '==', uuid));
    querySnapshot.docs.map((doc) => {
      const membershipData = doc.data();
      const customerMembership =new CustomerMembership( 
        membershipData.uuid,
        membershipData.customerName,
        membershipData.membershipId,
        membershipData.pointToReach,
        membershipData.currentPoint,
        membershipData.expiryDate,
        membershipData.startDate,
        membershipData.duration,
        membershipData.membershipCode,
        membershipData.status,
        membershipData.reward
      );
      if(customerMembership.uuid === uuid){
        memberships.push(customerMembership)
      }
    });
    return memberships;
  } catch (error) {
    return null;
  }
};

/**
 * 
 * @param {*} docId 
 * @param {*} updatedData 
 * @returns boolean
 */
export const updateCustomerMembership = async (docId, updatedData) => {
  try {
    const resultRef = doc(db, CUSTOMER_MEMBERSHIP, docId);
    await updateDoc(resultRef, JSON.parse(JSON.stringify(updatedData)));
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
export const updateCustomerMembershipByUUID = async (uuid, updatedData) => {
  const membershipRef = doc(db, CUSTOMER_MEMBERSHIP, uuid);

  try {
    await updateDoc(membershipRef, updatedData);
    const updatedMembershipSnapshot = await getDoc(membershipRef);
    const updatedMembershipData = updatedMembershipSnapshot.data();

    if (updatedMembershipData) {
      return new CustomerMembership( 
        membershipData.uuid,
        membershipData.customerName,
        membershipData.membershipId,
        membershipData.pointToReach,
        membershipData.currentPoint,
        membershipData.expiryDate,
        membershipData.startDate,
        membershipData.duration,
        membershipData.membershipCode,
        membershipData.status
      );
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
export const deleteCustomerMembership = async (docId) => {
  try {
    const membershipRef = doc(db, CUSTOMER_MEMBERSHIP, docId);
    await deleteDoc(membershipRef);
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
export const deleteCustomerMembershipByUUID = async (uuid) => {
  const membershipRef = doc(db, CUSTOMER_MEMBERSHIP, uuid);

  try {
    await deleteDoc(membershipRef);
    return true; // Deletion successful
  } catch (error) {
    return false;
  }
};