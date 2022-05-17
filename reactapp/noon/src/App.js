import * as React from 'react';
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import { GetImage } from './components/images';
import ItemCard from './components/card';
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour';
import SectionFive from './components/sectionFive';
import SectionSix from './components/sectionSix';
import SectionSeven from './components/sectionSeven';
import SectionEight from './components/sectionEight';
import SectionNine from './components/sectionNine';
import SectionTen from './components/sectionTen';
import SectionEleven from './components/sectionEleven';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <GetImage link="dv.png" altText="Fast Delivery"/>
      <SectionOne/>
      <ItemCard title="Recommended for you"/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <ItemCard title="More clearance deals"/>
      <GetImage link="fastdelivery.png" altText="Fast Delivery"/>
      <ItemCard title="Trending deals in electronics"/>
      <SectionSix/>
      <GetImage link="card.png" altText="Card"/>
      <ItemCard title="Trending deals in laptops"/>
      <SectionSeven/>
      <ItemCard title="Trending deals in mobiles"/>
      <SectionEight/>
      <ItemCard title="Trending deals in kitchen & dining"/>
      <GetImage link="bonus.gif" altText="Bonus"/>
      <SectionNine/>
      <GetImage link="2percent.gif" altText="Up to 2%"/>
      <SectionTen/>
      <GetImage link="70percent.png" altText="Up to 70%"/>
      <SectionEleven/>
      <GetImage link="emaar.jpg" altText="Emaar"/>
    </div>
  );
}

export default App;