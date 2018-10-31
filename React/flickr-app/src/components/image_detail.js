import React from 'react'

const ImageDetail = ({image}) => {
    
    if(image){
        return (
            <div className="container">
                <div className = "center">
                    <img className="Image-Detail"
                        src = {image.url_s} 
                        alt = {image.title}
                    />
                </div>
                
                <div className = "right">Title: {image.title}</div>
            </div>
        )
    }else{
        return(
            <div>
                Loading
            </div>
        )
    }
}


export default ImageDetail