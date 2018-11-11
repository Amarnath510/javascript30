const videosList = Array.from( document.querySelectorAll('.videos li') );

/*
let hours = 0, minutes = 0, seconds = 0;
videosList.forEach(video => {
  // console.log(video.dataset.time);
  let time = (video.dataset.time).split(":");
  minutes += parseInt(time[0], 10);
  seconds += parseInt(time[1], 10);
});

let remainingSeconds = Math.ceil(seconds % 60);
minutes += Math.floor(seconds / 60);
let remainingMinutes = Math.ceil(minutes % 60);
hours = Math.floor(minutes / 60);

console.log(hours, remainingMinutes, remainingSeconds);
*/


// Using map, reduce
const totalSeconds = videosList
  .map(node => node.dataset.time)
  .map(duration => {
    const [minutes, seconds] = duration.split(':').map(parseFloat);
    return (minutes * 60) + seconds;
  })
  .reduce((total, eachVideoInSeconds) => total + eachVideoInSeconds);

// console.log(totalSeconds);
const hours = Math.floor(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;
const minutes = Math.floor(remainingSeconds / 60);
remainingSeconds = remainingSeconds % 60;

console.log(hours, minutes, remainingSeconds);
