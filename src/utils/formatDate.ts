export const formatDate = ({ updateTime, isTime }: DateType) => {
  const targetDate = updateTime.split("T");
  const day = targetDate[0].split("-").join(".");
  const time = targetDate[1].slice(0, 5);

  if (isTime) {
    return `${day}`;
  }

  return `${day} ${time}`;
};
