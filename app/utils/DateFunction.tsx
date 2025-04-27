export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  
  if (isNaN(date.getTime())) {
    return ""; 
  }

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options)
    .format(date)
    .toUpperCase();
};