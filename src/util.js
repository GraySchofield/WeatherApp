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
    date.getMinutes().toLocaleString("en-us", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  return dateString;
}

export function converTimeToHour(timeStamp) {
  let date = fromUnixTime(timeStamp);

  return (
    date.getHours() +
    ":" +
    date.getMinutes().toLocaleString("en-us", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
}
