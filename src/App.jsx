import Card from './components/Card/Card.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
 

  return (
    <>
      <Header/>
      <main>
      <CoreConcepts/>
      <Examples/>

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
    </>
  );
}

export default App;
