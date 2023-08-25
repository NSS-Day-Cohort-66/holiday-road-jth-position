<<<<<<< HEAD
import keys from "/scripts/Settings.js";

const npsAPIKey = keys.npsKey;

export const ParkSelections = async () => {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?api_key=${npsAPIKey}`
  );
  const parkObjects = await response.json();

  console.log(parkObjects);
};
=======

>>>>>>> main
