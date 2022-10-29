const formatDate = (date: string) => {
  const d = new Date(Date.parse(date));

  const addZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

  const year = d.getFullYear();
  const month = addZero(d.getMonth() + 1);
  const dayOfMonth = addZero(d.getDate());

  return `${year}-${month}-${dayOfMonth}`;
};

export default formatDate;
