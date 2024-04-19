import Carousel from 'react-bootstrap/Carousel'

import carouselImages from '../carouselData'

function CarouselBackground() {
  return (
    <>
      <section id="home">
        <Carousel
          fade={true}
          controls={false}
          indicators={false}
          interval={3500}
        >
          {carouselImages.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img
                  src={image.image}
                  className="d-block w-100"
                  alt={'Slide image' + image.id}
                  rel="preload"
                  loading="eager"
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
