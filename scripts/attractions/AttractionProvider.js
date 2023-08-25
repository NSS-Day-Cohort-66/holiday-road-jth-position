export const AttractionSelections = async () => {
  const response = await fetch("http://holidayroad.nss.team/bizarreries");
  const attractionObjects = await response.json();

  console.log(attractionObjects);
};
