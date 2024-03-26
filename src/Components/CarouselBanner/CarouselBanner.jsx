import img1 from '../../assets/Photos/mobile-app-development.jpg'
import img3 from '../../assets/Photos/mobile-app-development.jpg'
import img2 from '../../assets/Photos/web-development.png'
import img4 from '../../assets/Photos/web-development.png'




import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const CarouselBanner = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel
                responsive={responsive}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className='pt-20'
            >
                <img src={img1} alt="" className='w-full h-64 lg:h-96' />
                <img src={img2} alt="" className='w-full h-64 lg:h-96' />
                <img src={img3} alt="" className='w-full h-64 lg:h-96' />
                <img src={img4} alt="" className='w-full h-64 lg:h-96' />



            </Carousel>
        </div>
    );
}

export default CarouselBanner
