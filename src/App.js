import React from 'react';
import './App.css';
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import Product from "./Components/Product";
import brand from "./assets/brand.png";
import story_our from "./assets/our_story.png";
import Tile from "./Components/Tile";
import Button from "./Components/Button";


function App() {

  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button
              isDisabled={false}
              buttonClick={() => console.log("to the collection")}>To the collection
          </Button>
            <Button
                isDisabled={false}
                buttonClick={() => console.log("shop all bags")}>Shop all bags

          </Button>
            <Button
                isDisabled={true}
                buttonClick={() => console.log("pre-orders")}>Pre-orders

           </Button>
          {/*<button type="button" onClick={buttonClick}> to the collection</button>*/}
          {/*  <button type="button" onClick={buttonClick}> shop all bags</button>*/}
          {/*  <button type="button" onClick={buttonClick} disabled className="disabled">Pre-orders</button>*/}
      </nav>

      <main>
          <Product
             label="Best seller"
             img={bag_one}
             title="The handy bag"
             price={400}
          />
          <Product
              label="Best seller"
              img={bag_two}
              title="The stylish bag"
              price={250}
           />
          <Product
              label="New collection"
              img={bag_three}
              title="The simple bag"
              price={300}
           />
          <Product
              label="New collection"
              img={bag_four}
              title="The trendy bag"
              price={150}
           />
      </main>
      <footer>
          <Tile
              title= "the brand"
            />
          <Tile
              img={brand}
          />
          <Tile
              img={story_our}
           />
          <Tile
              title="our story"
          />
      </footer>
      </>
  );
}


export default App;





