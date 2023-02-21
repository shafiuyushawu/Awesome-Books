import { DateTime } from './luxon.js';

const showDate = () => {
    const theDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const dateDiv = document.getElementById('date')
    dateDiv.innerHTML = theDate;
}

export default showDate;