export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '').replace(/^0/, '+40');
};

export const formatPhoneForDisplay = (phone: string): string => {
  return phone;
};

export const getPhoneHref = (phone: string): string => {
  return `tel:${formatPhoneNumber(phone)}`;
};
