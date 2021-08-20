// import React from 'react'

import { getAnchorList } from "../utils/anchorList"
import AnchorToCirculo from "./AnchorToCirculo"
import CirculoToDmc from "./AnchorToCirculo copy"
import AnchorToDmc from "./AnchorToDmc"

const Main = () => {
    const anchorColourList = getAnchorList()


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <AnchorToDmc anchorColourList={anchorColourList} />
            <AnchorToCirculo anchorColourList={anchorColourList} />
            <CirculoToDmc />
        </div>
    )
}

export default Main