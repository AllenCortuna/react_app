
import ImageGallery from 'react-image-gallery';

export default function StandardImageList({image}) {
  return (

    <div>
    {image.map((item)=>( 
      <img src={item} alt=""  className='img' key={item}/>
    ))}
    </div>
<ImageGallery items={image} />;

  );
}


