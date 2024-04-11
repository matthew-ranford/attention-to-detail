import Carousel from 'react-bootstrap/Carousel'

import image0 from '../images/carousel-0.png'
import image13 from '../images/carousel-13.png'
import image2 from '../images/carousel-2.png'
import image4 from '../images/carousel-4.png'
import image12 from '../images/carousel-12.png'
import image5 from '../images/carousel-5.png'
import image11 from '../images/carousel-11.png'
import image14 from '../images/carousel-14.png'
import image7 from '../images/carousel-7.png'
import image8 from '../images/carousel-8.png'
import image10 from '../images/carousel-10.png'
import image6 from '../images/carousel-6.png'

const carouselImages = [
  {
    id: 1,
    image: image0,
  },
  {
    id: 2,
    image: image13,
  },
  {
    id: 3,
    image: image2,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image12,
  },
  {
    id: 6,
    image: image5,
  },
  {
    id: 7,
    image: image11,
  },
  {
    id: 8,
    image: image14,
  },
  {
    id: 9,
    image: image7,
  },
  {
    id: 10,
    image: image8,
  },
  {
    id: 11,
    image: image10,
  },
  {
    id: 12,
    image: image6,
  },
]

function CarouselBackground() {
  return (
    <>
      <section id="home">
        <Carousel
          fade={true}
          controls={false}
          indicators={false}
          interval={3000}
        >
          {carouselImages.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img
                  src={image.image}
                  className="d-block w-100"
                  alt={'Slide image' + image.id}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </section>
    </>
  )
}

export default CarouselBackground
