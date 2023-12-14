export const formatDate = (date: string) => {
  const targetDate = date.split("T");
  const day = targetDate[0].split("-").join(".");
  const time = targetDate[1].slice(0, 5);

  return `${day} ${time}`;
};
