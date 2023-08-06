import {useState, useEffect} from "react"

const useHouses = () => {

    const[allHouses, setAllHouses] = useState([])

    useEffect(()=>{
     const fetchHouses = async ()=>{
       const res = await fetch('./houses.json')
       const houses = await res.json()
       setAllHouses(houses)
     }
     fetchHouses()
    },[])

    return allHouses;
}
 
export default useHouses;