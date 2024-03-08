import dayjs from "dayjs";

  // Sort each category by expiry date
const sortMembershipsByExpiryDate = (a, b) => dayjs(a.expiryDate).diff(dayjs(b.expiryDate));

const searchByCustomerName =(filterValue,membershipsData)=>{
    const filterResult = membershipsData ? membershipsData.filter((data) => (data.customerName.toLowerCase()).includes(filterValue.toLowerCase())): null;
    return filterResult ? filterResult : [];

}

const searchByMembershipCode = (filterValue,membershipsData) =>{
    const filterResult = membershipsData ? membershipsData.filter((data) => (data.membershipCode.toLowerCase())===(filterValue.toLowerCase())): null;
    return filterResult ? filterResult : [];

}

const searchByDate =(filterValue,membershipsData,isExpiryDate)=>{
    const filterResult = membershipsData ? membershipsData.filter((data) => (isExpiryDate?data.expiryDate:data.startDate) === filterValue) : null;
    return filterResult ? filterResult : [];

}

const searchByStatus = (filterValue, membershipsData) => {
    const filterResult = membershipsData ? membershipsData.filter((data) => data.status === filterValue) : null;
    return filterResult ? filterResult : [];
};

const categorizeMemberships = (filterValue, memberships) => {
    const currentDate = dayjs();
  
    const next7Days = [];
    const next20Days = [];
    const thisMonth = [];
  
    memberships.forEach((membership) => {
        const expiryDate = dayjs(membership.expiryDate);
        const daysUntilExpiry = expiryDate.diff(currentDate, 'days');
        const today = dayjs();
        const nextWeek = today.add(7, 'days');

        if (expiryDate.isAfter(today) && expiryDate.isBefore(nextWeek)) {
          next7Days.push(membership);
        } 
        if(daysUntilExpiry <= 20) {
          next20Days.push(membership);
        } 
        if (expiryDate.month() === currentDate.month() && expiryDate.year() === currentDate.year()) {
          thisMonth.push(membership);
        }
      });

      const mappedObj = {
        '7 Days':next7Days.sort(sortMembershipsByExpiryDate),
        '20 Days':next20Days.sort(sortMembershipsByExpiryDate),
        'this month': thisMonth.sort(sortMembershipsByExpiryDate),
      }
    return mappedObj[filterValue]
  };

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const filterMemberships = (filterType, filterValue, membershipsData) => {
    let filteredMemberships = [];
    console.log('filterType', filterType);
    switch (filterType) {
        case 'Customer Name':
            filteredMemberships = searchByCustomerName(filterValue, membershipsData);
            return filteredMemberships ? filteredMemberships.length > 0 ? filteredMemberships : null : null;
        case 'Expiry Date':
            filteredMemberships = searchByDate(filterValue, membershipsData, true);
            return filteredMemberships ? filteredMemberships.length > 0 ?filteredMemberships : null : null;
        case 'Status':
            filteredMemberships = searchByStatus(filterValue, membershipsData);
            return filteredMemberships ? filteredMemberships.length > 0 ? filteredMemberships : null : null;
        case 'Membership Code':
            filteredMemberships = searchByMembershipCode(filterValue, membershipsData);
            return filteredMemberships ? filteredMemberships.length > 0 ? filteredMemberships : null : null;
        case 'Expired In Next Few Days':
            filteredMemberships = categorizeMemberships(filterValue, membershipsData);
            return filteredMemberships ? filteredMemberships.length > 0 ? filteredMemberships : null : null;
    }
};