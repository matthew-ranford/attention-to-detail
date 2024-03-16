// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

function CarouselBackground() {
  return (
    <>
      <Carousel fade data-bs-theme="dark" controls={false} indicators={false}>
        <Carousel.Item interval={5000}>
          <img
            className="img-fluid"
            src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="img-fluid"
            src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://atd-decorators.co.nz/static/20210423_113253-bb31cde6de68a21ab03924c7d2017bfa.jpg"
            className="img-fluid"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="img-fluid"
            src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselBackground
