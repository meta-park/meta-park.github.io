import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Section from 'components/Section'

import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/03.jpg';
import img4 from '../../assets/04.jpg';
import img5 from '../../assets/05.jpg';
import img6 from '../../assets/06.jpg';
import img7 from '../../assets/07.jpg';
import img8 from '../../assets/08.jpg';

export default function SimpleSlider({ id, visible, sectionRef }) {
  const titleId = `${id}-title`
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2500,
    rows: 2
  };
  return (
    <Section
        as="section"
        id={id}
        ref={sectionRef}
        aria-labelledby={titleId}
        tabIndex={-1}
        className="parkCarousel"
    >
    <div 
        className="container_wrapper"
    >
        <div 
            className="container"
        >
            <Slider {...settings}>
            <div>
                <h3>豫 园</h3>
            </div>
            <div>
                <img src={img1} alt=""></img>
            </div>
            <div>
                <h3>古猗园</h3>
            </div>
            <div>
                <img src={img2} alt=""></img>
            </div>
            <div>
                <h3>鲁迅公园</h3>
            </div>
            <div>
                <img src={img3} alt=""></img>
            </div>
            <div>
                <h3>中山公园</h3>
            </div>
            <div>
                <img src={img4} alt=""></img>
            </div>
            <div>
                <h3>黄埔公园</h3>
            </div>
            <div>
                <img src={img5} alt=""></img>
            </div>
            <div>
                <h3>秋霞圃</h3>
            </div>
            <div>
                <img src={img6} alt=""></img>
            </div>
            <div>
                <h3>曲水园</h3>
            </div>
            <div>
                <img src={img7} alt=""></img>
            </div>
            <div>
                <h3>醉白池</h3>
            </div>
            <div>
                <img src={img8} alt=""></img>
            </div>
            </Slider>
        </div>
    </div>
    </Section>
  );
}