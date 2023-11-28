import "./Menu.css"
import { menudata } from "@/data/menudata"
const Menu = (props)=>{
    return(
        <nav id="menu">
            <div id="logo">TECHNICS</div>
            <ul>
                {
                    menudata.map((value,index)=><li
                    onClick={()=>props.menuDisplay(value.link)} 
                    key={index}>{value.label}</li>)
                }
            </ul>
        </nav>
    )
}
export default Menu