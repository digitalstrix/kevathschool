export const kevath_user = "kevath_user";

export const getUserData = async () => {
  const data = localStorage.getItem(kevath_user);
  if (data != null) return JSON.parse(data);
  else return null;
};
