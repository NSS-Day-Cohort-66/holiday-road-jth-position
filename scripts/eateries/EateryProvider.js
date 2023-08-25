export const eateriesOptions = async () => {
  const response = await fetch("http://holidayroad.nss.team/eateries");
  const eateries = await response.json();

  let eateriesOptionsHTML =
    "<h2>Eateries</h2><select id='eatery'><option value='0'>Select an eatery</option>";
  const eateriesStringArray = eateries.map((eatery) => {
    return `<option value="${eatery.id}">${eatery.businessName}</option>`;
  });
  eateriesOptionsHTML += eateriesStringArray.join("");
  eateriesOptionsHTML += "</select>";

  return eateriesOptionsHTML;
};
