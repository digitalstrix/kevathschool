export const kevath_user = "kevath_user";
export const session_data = "session_data";

export const getUserData = async () => {
  const data = localStorage.getItem(kevath_user);
  if (data != null) return JSON.parse(data);
  else return null;
};

export const getSessiondata = async () => {
  const data = localStorage.getItem(session_data);
  if (data != null) return JSON.parse(data);
};
