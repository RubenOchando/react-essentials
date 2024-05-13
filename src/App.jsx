
import componentsImg from './assets/components.png';
import coreConceptImg from './assets/react-core-concepts.png';
import statemanage from './assets/state-mgmt.png';
import config from './assets/config.png';
import Card from './components/Card/Card.jsx';
import TabButton from './components/TabButton.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';



function App() {
  
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log('Use state will be update after the app is executed again --Selected ' + selectedTopic);
  }

  let tabContent = <p>Please Select a topic</p> ;

  if (selectedTopic){
    tabContent = (<div id="tab-content">

    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}
    </p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>

  </div>)
  
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
  return (
    <div>
      <Header></Header>


      <main>
        <section id="core-concepts">
          <h2>Core-Concept!</h2>
          
          <ul>
          {CORE_CONCEPTS.map((concepItem) => <CoreConcept key={concepItem.title} {...concepItem} />)}
          </ul>

        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton
            isSelected={selectedTopic === 'props'} 
            onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'} 
            onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}

        </section>
        <section id="cards">
          <h1>Available Experts</h1>
          <Card name="Ruben Ochando">
            <p>
              Ruben is a professional of Computer Science at the University of the life.
            </p>
            <p>
              <a href="mailto:ruocho@gmail.com">Ruben Ochando</a>
            </p>
          </Card>

        </section>

      </main>
    </div>
  );
}

export default App;
