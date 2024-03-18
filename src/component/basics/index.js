import React from 'react'
import './Style.css'
import Menu from "./API"
import Menucard from './menucard'
import Navbar from './Navbar'

const uniquelist = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category
        })
    ),
    "All",
]
console.log(uniquelist);

const Index = () => {
    const [menudata, setMenuData] = React.useState(Menu)
    const [menulist, setMenulist] = React.useState(uniquelist)

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu)
            return
        }
        const updatedlist = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenuData(updatedlist)
    }
    return <>
        <Navbar filterItem={filterItem} menulist={menulist} />
        <Menucard menudatalist={menudata} />
    </>
}

export default Index
