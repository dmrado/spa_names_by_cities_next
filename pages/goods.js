import React from "react"
import {getItems} from "../components/model/Goods"

export default (props) => {
    let items = getItems()
    return(
        <>
            {items.map(  (item) => {
                return(
                    <div className="good">
                        {item.title}
                    </div>
                )
            })}

        </>
    )


}