import fromUnixTime from "date-fns/fromUnixTime";

export function convertTimeStamp(timeStamp) {
  let date = fromUnixTime(timeStamp);

  const dateString =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return dateString;
}
