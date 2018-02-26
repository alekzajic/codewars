const secondsIn = {
  minutes: 60,
  hours: 60*60,
  days: 60*60*24,
  years: 60*60*24*365 
}

formatDuration = (seconds) => {
  if (seconds < 0) { return 'invalid'}
  if (seconds === 0) { return 'now'}

  let secondsLeft = seconds;

  const getTime = unit => {
    let times=0;
    while(secondsLeft >= secondsIn[unit]) {
      secondsLeft -= secondsIn[unit];
      times +=1;
    }
    return times;
  }

  let years = getTime('years');
  let days = getTime('days');
  let hours = getTime('hours');
  let minutes = getTime('minutes');

  let readableFormatElements = [];

  if (years > 0) readableFormatElements.push(`${years} ${years !== 1 ? 'years': 'year'}`);
  if (days > 0) readableFormatElements.push(`${days} ${days !== 1 ? 'days': 'day'}`);
  if (hours > 0) readableFormatElements.push(`${hours} ${hours !== 1 ? 'hours': 'hour'}`);
  if (minutes > 0) readableFormatElements.push(`${minutes} ${minutes !== 1 ? 'minutes': 'minute'}`);
  if (secondsLeft > 0) readableFormatElements.push(`${secondsLeft} ${secondsLeft !==1 ? 'seconds': 'second'}`);

  let formated = '';

  readableFormatElements.forEach((item, i) => {
    if (i === readableFormatElements.length -1 && i !== 0) {
      formated += ` and ${item}`;
    } else {
      if (i === 0) {
        formated += item;
      } else {
        formated += `, ${item}`;
      }
    }
  });

  return formated;
}


console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"


// BEST SOLUTION 
function formatDuration2 (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}


console.log(formatDuration2(1)); // "1 second"
console.log(formatDuration2(62)); // "1 minute and 2 seconds"
console.log(formatDuration2(120)); // "2 minutes"
console.log(formatDuration2(3600)); // "1 hour"
console.log(formatDuration2(3662)); // "1 hour, 1 minute and 2 seconds"