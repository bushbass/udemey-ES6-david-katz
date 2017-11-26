import React , { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = "https://cdn0.iconfinder.com/data/icons/thin-photography/57/thin-367_photo_image_wall_unavailable_missing-512.png"
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink, subtitle} = item.volumeInfo;
            let {country} = item.saleInfo;
            return (
              <a 
              key={index} 
              href = {infoLink}
              className="book"
              target="_blank" >
                <img className="book-img" src ={imageLinks !== undefined ? imageLinks.thumbnail : alternate} alt= "book image" />
                <div className="book-text">
                  {title}<br />
                  {subtitle}<br />
                  Published in {country}
                </div>
                
              </a>

            )
          })
        }
      </div>
    )
  }
}

export default Gallery;