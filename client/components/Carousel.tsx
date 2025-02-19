import hero from '../images/hero-section-atd-test.png'
import logo from '../images/logo.png'

import { Container } from 'react-bootstrap'

function CarouselBackground() {
  return (
    <>
      <section id="home">
        <div className="relative">
          <Container fluid="lg">
            <img
              src={logo}
              alt="Attention To Detail Logo"
              width="200px"
              loading="eager"
              decoding="async"
              className="absolute mt-4 -mx-3 2xl:-mx-6"
            />
          </Container>
          <img
            src={hero}
            alt="Attention To Detail Logo"
            width="100%"
            loading="eager"
            decoding="async"
            className="h-[800px] md:h-[750px] 2xl:h-[1500px] object-cover"
          />
          <div className="absolute inset-0 bg-[#006cc1] bg-opacity-10 sm:hidden"></div>
        </div>
        <Container fluid="lg">
          <div className="absolute top-[25%] md:top-[25%] 2xl:top-[30%]">
            <h1 className="font-bold header text-[3.2rem] md:text-6xl 2xl:text-7xl -ml-1 max-w-[350px] md:max-w-[665px] 2xl:max-w-[1200px]">
              Elevate your space{' '}
              <span className="secondary-header block mt-2 md:mt-4 2xl:pt-4 text-3xl md:text-[3.3rem] 2xl:text-[3.9rem]">
                with Attention to Detail.
              </span>
            </h1>
            <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl max-w-[320px] md:max-w-[620px] 2xl:max-w-[700px] mt-4 2xl:pt-2">
              At Attention to Detail Painting & Decorating services, we take
              pride in making spaces look their best. Whether it’s a small
              update or a big change, our team works carefully to bring your
              ideas to life. Let us help you create a space you’ll love.
            </p>
            <div className="block sm:inline-block pt-4">
              <button className="text-white w-[330px] sm:w-[200px] rounded bg-[#006cc1] transition-all duration-1000 hover:bg-[#006dc1a4] sm:mt-7 px-5 py-3">
                Get a quote
              </button>
            </div>
            <div className="block sm:inline-block mt-2">
              <button className="w-[330px] sm:w-[200px] border rounded bg-[#C1C7C7] border-black transition-all duration-1000 hover:bg-[#a4a8a8] sm:mt-7 sm:ml-5 px-5 py-3">
                Our services
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CarouselBackground
