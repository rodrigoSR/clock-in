export function convertMilisecondsToTime(miliseconds: number): string {
  const seconds = Math.floor(miliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const secondsString =
    seconds % 60 < 10 ? `0${seconds % 60}` : `${seconds % 60}`;
  const minutesString =
    minutes % 60 < 10 ? `0${minutes % 60}` : `${minutes % 60}`;
  const hoursString = hours % 60 < 10 ? `0${hours % 60}` : `${hours % 60}`;

  return `${hoursString}:${minutesString}:${secondsString}`;
}
