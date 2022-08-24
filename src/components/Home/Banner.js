import React from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

const Banner = () => {
  const furnitureCards = [
    {
      id: 3,
      title: "Free Ecommerce Template",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      banner:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "100% Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      banner:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 1,
      title: "Free Ecommerce Template",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      banner:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ]

  return (
    <div>
      <section id="slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                id="slider-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    margin={10}
                    dots={true}
                    items={1}
                    autoplay={true}
                    nav
                  >
                    {furnitureCards.map((card, index) => (
                      <div className="item">
                        <div className="col-sm-6">
                          <h1 key={index}>
                            <span>E</span>-SHOPPER
                          </h1>
                          <h2>{card.title}</h2>
                          <p>{card.description} </p>
                          <button type="button" className="btn btn-default get">
                            Get it now
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <img
                            src={card.banner}
                            className="girl img-responsive"
                            alt="Banner"
                          />
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
