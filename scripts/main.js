import { AttractionSelections } from "./attractions/AttractionProvider.js";

const mainContainer = document.querySelector("#container");

const renderHTML = async () => {
    const attractionOption = await AttractionSelections()
  mainContainer.innerHTML = `
    <header class="header">
        <h1 class="title">Holiday Road</h1>
    </header>

    <aside class="savedItineraries">
        <h2>Itineraries List</h2>
    </aside>

    <article class="choices">
        <section class="choices__parks options">
            
        </section>
        
        <section class="choices__attractions options">
            ${attractionOption}
        </section>
        
        <section class="choices__eateries options">
            
        </section>
    </article>
    
    <article class="preview">
        <h2>Itinerary Preview</h2>
    </article>
    `;
};

renderHTML();
