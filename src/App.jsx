import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import SearchResults from './search-results'
import HouseFilter from './components/HouseFilter'
import HouseFromQuery from './components/HouseFromQuery'
import useHouses from './hooks/useHouses'
import useFeaturedHouses from './hooks/useFeaturedHouses'
import housesContext from './context/housesContext'
import HousesContext from "./context/housesContext"


function App() {
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouses(allHouses)

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header />
          <HouseFilter />
          <Switch>

            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/searchresults/:id">
              <HouseFromQuery />
            </Route>

            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
    
  )
}

export default App
