export const getTheEateries = async () => {
  const response = await fetch("http://holidayroad.nss.team/eateries");
  const eateries = await response.json();
  console.log("Hi" + eateries);
};
