import { DateTime } from './luxon.js';

export default function showDate() {
    const theDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const dateDiv = document.getElementById('date')
    dateDiv.innerHTML = theDate;
}
