import { useState, useEffect, useMemo } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import SearchResults from './search-results'
import HouseFilter from './components/HouseFilter'
import HouseFromQuery from './components/HouseFromQuery'
import useHouses from './hooks/useHouses'
import useFeaturedHouses from './hooks/useFeaturedHouses'


function App() {
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouses(allHouses)

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
