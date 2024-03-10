import React,{ useState,useEffect }from 'react';
import { getCustomerMembershipByUUID,deleteCustomerMembership } from 'api/customerMembership';
import dayjs from 'dayjs'; 
import { useUserAuth } from 'context/UserAuthContext';
import { update } from 'lodash';

const getActiveMembershipsQuantity = ( memberships ) => {
    return memberships ? memberships.filter((f)=>f.status === 'Active').length : 0;
}

const getNonActiveMembershipsQuantity = ( memberships ) => {
    return memberships ? memberships.filter((f) => f.status === 'Non-Active').length : 0;
}

const getExpiringMembershipsQuantity = ( memberships ) => { //Quantity for memberships which will be expired in next seven days.
    const today = dayjs();
    const nextWeek = today.add(7, 'days');

    // Filter memberships with expiryDate within the next 7 days
    const expiringMemberships = memberships.filter((membership) => {
      const expiryDate = dayjs(membership.expiryDate);
      return expiryDate.isAfter(today) && expiryDate.isBefore(nextWeek);
    });

    return expiringMemberships?expiringMemberships.length:0;
}

const getMembershipsProgressQuantity = ( memberships ) => {
    return{
        '100%' : memberships.filter((f) => ((f.currentPoint / f.pointToReach) * 100) === 100).length,

        '50-99%' : memberships.filter((f) => {
            const percentage = (f.currentPoint / f.pointToReach) * 100;
            return 50 <= percentage && percentage < 99.9;
          }).length,

        '0-49%' : memberships.filter((f) => {
            const percentage = (f.currentPoint / f.pointToReach) * 100;
            return 0 <= percentage && percentage < 49.9;
          }).length,
    }
}

const initialValues = {
    totalMembership:0,
    activeMembership:0,
    nonActiveMembership:0,
    expiringMemberships:0, //refer to membership that will be expired in next 7 days.
    membershipsProgress: {
        '100%' : 0,
        '50-99%' : 0,
        '0-49%' : 0,
    }
    
}
export const useDashBoard = (userEmail)=>{
    const [memberships,setMemberships]=useState(initialValues);
    const getMemberships = async () => {
        try {
            await getCustomerMembershipByUUID(userEmail).then((result)=>{
            result?setMemberships((prev) => {
                const activeMembership = getActiveMembershipsQuantity(result);
                const nonActiveMembership = getNonActiveMembershipsQuantity(result);
                const membershipsProgress = getMembershipsProgressQuantity(result);
                const expiringMemberships = getExpiringMembershipsQuantity(result);

                const updated = {
                    ...prev,
                    totalMembership: result.length,
                    activeMembership: activeMembership,
                    nonActiveMembership: nonActiveMembership,
                    membershipsProgress: membershipsProgress,
                    expiringMemberships: expiringMemberships
                };
                return updated;
            }):null
        });
            
        } catch (error) {
            setMemberships((prev) => {
                const updated = {
                    ...prev,
                    totalMembership: 0,
                    activeMembership: 0,
                    nonActiveMembership: 0,
                    membershipsProgress: {},
                    expiringMemberships: 0,
                };
                return updated;
              })
        }
    };
    

    useEffect(()=>{
    if(userEmail){
        getMemberships()
    }
    },[
        userEmail
    ])

    return {
        totalMembershipQuantity: memberships.totalMembership,
        activeMembershipQuantity: memberships.activeMembership,
        nonActiveMembershipQuantity: memberships.nonActiveMembership,
        membershipsProgress: memberships.membershipsProgress,
        expiringMembershipsQuantity: memberships.expiringMemberships
    }
}