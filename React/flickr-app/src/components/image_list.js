import React from 'react'
import ImageItem from "./image_item"


const ImageList = ({images, OnImageClick}) => {
    const imageItems = images.map(
        (img) => {
            return (
                <ImageItem 
                key = {img.id} 
                image = {img}
                OnImageClick = {()=> {OnImageClick(img)}}/>
            )
        }
    )


    return (
        <ul className = "Image-List">
            {imageItems}
        </ul>
    )
}


export default ImageList