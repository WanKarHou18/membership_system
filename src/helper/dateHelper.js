//third party - Date Picker
import dayjs, { Dayjs } from 'dayjs';

export const formatDateToDDMMYYYY = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return inputDate.toLocaleDateString('en-US', options);
};
