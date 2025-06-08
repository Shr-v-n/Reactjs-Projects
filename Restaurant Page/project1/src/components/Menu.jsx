import MenuNavbar from './MenuNavbar'
import styles from './Menu.module.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import menuData from './MenuData'
import FoodCard from './FoodCard'

const Menu = () => {

  const [selection, setSelection] = useState("All");
  const [menuItems, setMenuItems] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [menuItemsLoaded, setMenuItemsLoaded] = useState(false);

  useEffect(() => {
    setMenuItems(menuData);
  },[])

  useEffect(() => {
    console.log(menuItems,"MenuItems");
    setMenuItemsLoaded(true);
  },[menuItems])

  useEffect(() => {
    console.log(menuItemsLoaded);
    setDisplayList(menuItems);
  },[menuItemsLoaded])

  useEffect(() => {
    if(menuItemsLoaded && selection!=="All"){
      setDisplayList(menuItems.filter(item =>  item.type === selection));
    }
    else if(menuItemsLoaded && selection==="All"){
      setDisplayList(menuItems)
    }
  },[selection])

  useEffect(() => {
    console.log(displayList,"New list",selection);
  },[displayList])

  return (
    <div className={styles.mainContainer}>

      <MenuNavbar />

      <div className={styles.buttonContainer}>
        <button onClick={ () => setSelection("All")}>All</button>
        <button onClick={ () => setSelection("Vegan")}>Vegan</button>
        <button onClick={ () => setSelection("Meat")}>Meat</button>
      </div>

      <div className={styles.foodCardContainer}>

        {!menuItemsLoaded ? <h1>Loading</h1> : 
          displayList.map( item => (
            <div key={item.id}>
              <FoodCard 
                id = {item.id}
                name = {item.name}
                description = {item.description}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                time = {item.time}
                type = {item.type}
                />
            </div>
            )
          )
        }

      </div>

    </div>
  )
}

export default Menu
