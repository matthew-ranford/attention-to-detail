// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
// import Ratio from 'react-bootstrap/Ratio'

// Testing out ratios to try and get the images closer to 100vh

function CarouselBackground() {
  return (
    <>
      <section id="home">
        <Carousel fade data-bs-theme="dark" controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-0.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-1.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-2.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-3.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-4.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-5.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-6.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-7.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-8.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-9.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-10.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-11.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-12.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-13.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>{' '}
          <Carousel.Item interval={3000}>
            {/* <Ratio aspectRatio="16x9"> */}
            <img
              src="client/images/carousel-14.png"
              className="img-fluid"
              alt=""
            />
            {/* </Ratio> */}
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default CarouselBackground
