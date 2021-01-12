import React from "react"
import PropTypes from "prop-types"
import Image from "./Image"


const ImageListing = ({images}) => {
    return (  
        <div className="col-12 p-5 row">
            {images.map(image => (
                <Image 
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    )
}

ImageListing.propTypes = {
    images: PropTypes.array.isRequired
}
 
export default ImageListing