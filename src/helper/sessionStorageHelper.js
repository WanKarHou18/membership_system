// Storing data in session storage
export const saveDataToSessionStorage = (key, data, isJSON) => {
    try {
      const serializedData = isJSON ? JSON.stringify(data) : data;
      sessionStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to session storage:', error);
    }
  };

  // Getting data from session storage
export const getDataFromSessionStorage = (key, isJSON) => {
    try {
      const serializedData = sessionStorage.getItem(key);
      return serializedData ? isJSON ? JSON.parse(serializedData) : serializedData : null;
    } catch (error) {
      console.error('Error getting data from session storage:', error);
      return null;
    }
  };
  