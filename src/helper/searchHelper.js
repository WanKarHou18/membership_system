
const searchByCustomerName =({filterValue,membershipsData})=>{
    const filterResult = membershipsData ? membershipsData.filter((data) => (data.customerName.toLowerCase()) === filterValue.toLowerCase()) : null;
    return filterResult ? filterResult : [];

}

const searchByDate =(filterValue,membershipsData,isExpiryDate)=>{
    const filterResult = membershipsData ? membershipsData.filter((data) => (isExpiryDate?data.expiryDate:data.startDate) === filterValue) : null;
    return filterResult ? filterResult : [];

}

export const searchByStatus = (filterValue, membershipsData) => {
    const filterResult = membershipsData ? membershipsData.filter((data) => data.status === filterValue) : null;
    return filterResult ? filterResult : [];
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
            break;
        case 'Expiry Date':
            filteredMemberships = searchByDate(filterValue, membershipsData, true);
            return filteredMemberships.length > 0 ? filteredMemberships : null;
        case 'Status':
            filteredMemberships = searchByStatus(filterValue, membershipsData);
            return filteredMemberships.length > 0 ? filteredMemberships : null;
    }
};