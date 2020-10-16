function getDate(stamp) {
  const date = new Date(stamp);
  const days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let m = date.getMinutes();
  if (m < 10) {
    m = '0' + m;
  }
  const string = date.getHours() + ':' + m + ' ' + days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate()+ ' ' + date.getFullYear();
  return string;
}

export default getDate;
