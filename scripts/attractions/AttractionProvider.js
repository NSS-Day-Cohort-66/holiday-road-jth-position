export const AttractionSelections = async () => {
  const response = await fetch("http://holidayroad.nss.team/bizarreries");
  const attractionObjects = await response.json();
  let attractionHTML = "<h2>Bizarreries</h2>"
  attractionHTML += '<select id="attractions">'
  attractionHTML += '<option value="0">Select an Attraction</option>'

  const arrayOfOptions = attractionObjects.map( (attraction) => {
    return `<option value="${attraction.id}">${attraction.name}</option>`
  }
)
  attractionHTML += arrayOfOptions.join("")
  attractionHTML += "</select>"
  return attractionHTML
};
