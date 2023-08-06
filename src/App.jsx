import { useState, useEffect, useMemo } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import SearchResults from './search-results'
import HouseFilter from './components/HouseFilter'
import HouseFromQuery from './components/HouseFromQuery'


function App() {
 const[allHouses, setAllHouses] = useState([])

 useEffect(()=>{
  const fetchHouses = async ()=>{
    const res = await fetch('./houses.json')
    const houses = await res.json()
    setAllHouses(houses)
  }
  fetchHouses()
 },[])

 const featuredHouse = useMemo(()=>{
  if(allHouses.length){
    const randomIndex = Math.floor(Math.random()* allHouses.length)
    return allHouses[randomIndex]
  }
 }, [allHouses])


  return (
    <Router>
      <div className="container">
        <Header />
        <HouseFilter allHouses={allHouses} />
        <Switch>

          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>
          </Route>

          <Route path="/searchresults/:id">
             <HouseFromQuery allHouses={allHouses}/>
          </Route>

          <Route path="/">
             <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
