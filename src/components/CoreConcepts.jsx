import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts(){
    return(

    <section id="core-concepts">
    <h2>Core-Concept!</h2>
    
    <ul>
    {CORE_CONCEPTS.map((concepItem) => <CoreConcept key={concepItem.title} {...concepItem} />)}
    </ul>

  </section>
    );
}


  /* NOTES : 
          <ul>
            {CORE_CONCEPTS.map((concepItem) => <CoreConcept {...concepItem} />)}
          </ul>
          ^
          |
          equilavent code
          |
          v
          <ul>
              <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
    */