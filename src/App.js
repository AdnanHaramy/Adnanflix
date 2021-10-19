import React from 'react';
import Header from './components/Header';
import Heading1 from './components/Heading1';
import Button1 from './components/Button1';
import Paragraph from './components/Paragraph';
import Grid1 from './components/Grid1';
import Card2 from './components/Card2';
import Reservation from './components/Reservation';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
function App() {
  return (
    <React.Fragment>
     <Header/>
      <Heading1 name1="Choose & Enjoy"/>
      <Paragraph/>
      <CardGrid/>
      <Grid1/>
      <Reservation/>
      <Card2/>
      <Footer/>
    </React.Fragment>
    
     

  );
}
export default App;
