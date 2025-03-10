import React from 'react';
import topic from './data/topic.json';
import Card from './components/Card';
import Search from './components/Search';
import './App.css';

function filter(items, search) {
  if (search === "") {
    return items;
  }
  return items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
}

function App() {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-4">Sports Shop</h2>
      <Search placeholder="Search" search={search} setSearch={setSearch} />
      {topic.sportsShop.goods.map((category, index) => (
        <div key={index} className="flex flex-row flex-wrap justify-center">
          {filter(category.items, search).map((item, itemIndex) => (
            <Card
              key={itemIndex}
              name={item.name}
              price={item.price}
              stock={item.stock}
              brand={item.brand}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;