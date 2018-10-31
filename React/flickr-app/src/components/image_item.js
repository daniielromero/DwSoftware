import React from 'react'

const ImageItem = ({image,OnImageClick}) => {
    return(
        <li className = "Image-Item" onClick = {()=> {OnImageClick(image)}}>
            <img 
                className="img-circle"
                src = {image.url_s}
                alt = 'Item'/>
        </li>
    )
}

export default ImageItem