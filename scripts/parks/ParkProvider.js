import { npsKey } from "./Settings.js";

const npsAPIKey = npsKey;

const ParkSelections = () => {
  response = fetch(
    `https://developer.nps.gov/api/v1/parks?api_key=${npsAPIKey}`
  )
    .then((response) => response.json())
    .then();
};
