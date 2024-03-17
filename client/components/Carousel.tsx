// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Ratio from 'react-bootstrap/Ratio'

// Testing out ratios to try and get the images closer to 100vh

function CarouselBackground() {
  return (
    <>
      <Carousel fade data-bs-theme="dark" controls={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <Ratio aspectRatio="16x9">
            <img
              src="https://atd-decorators.co.nz/static/80070375_105547584557182_8749752288730975304_n-c16d4d1680e2a1eda4456ca8877f04d2.jpeg"
              className="img-fluid"
              alt=""
            />
          </Ratio>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Ratio aspectRatio="16x9">
            <img
              className="img-fluid"
              src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
              alt="First slide"
            />
          </Ratio>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Ratio aspectRatio="16x9">
            <img
              className="img-fluid"
              src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
              alt="Second slide"
            />
          </Ratio>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Ratio aspectRatio="16x9">
            <img
              className="img-fluid"
              src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
              alt="Third slide"
            />
          </Ratio>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselBackground
