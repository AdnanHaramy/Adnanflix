import React from 'react';
import Heading1 from './components/Heading1';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import Grid1 from './components/Grid1';
import Card from './components/Card';
function App() {
  return (
    <section >
      <Button />
      <Heading1 name1="Choose & Enjoy"/>
      <Paragraph/>
      <Grid1/>
      <Heading1 name1="Book Your Table"/>
      <Card />
    </section>
  );
}
export default App;
