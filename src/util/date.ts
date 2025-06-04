import { default as dayjs } from "dayjs";

export const isFutureDate = (date: string | Date) => {
  const currentDate = new Date();
  return new Date(date).getTime() > currentDate.getTime();
};

export const formatDate = (date: number | Date) =>
  dayjs(date).format("MMMM D, YYYY h:mm");
