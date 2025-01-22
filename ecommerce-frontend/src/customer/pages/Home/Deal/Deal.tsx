import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Deal = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='py-5 lg:px-20px'>
      <div className='flex items-center justify-evenly'>
      {/* <Slider {...settings}>  */}
        {[1,1,1,1,1].map(() => (<DealCard />))}
      {/* </Slider> */}
      </div>
    </div>
  )
}

export default Deal
