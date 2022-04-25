
import Slider from "react-slick";

export default function StandardImageList({image}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotClass: 'dotClass'
  };

  return (
    <div style={{padding:'10%'}}>
    <Slider {...settings}>
      {image.map((item)=>( 
      <div>
        <img src={item} alt=""   key={item} style={{width:'100%' ,height:'auto', objectFit:'cover'}} />
      </div>
      ))}
    </Slider>
    </div>
  );
}


