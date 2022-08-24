import React from "react"
import ProductCategory from "../components/Category/ProductCategory"
import Banner from "../components/Home/Banner"
import FeaturedItems from "../components/Home/FeaturedItems"
import Layout from "../components/Layout/Layout"
// import FeaturedItems from "./home/featuredItems"
// import RecomendedItems from "../components/common/RecomendedItems"
// import BannerCarousel from "./home/bannerCarousel"
// import Seo from "../components/common/Seo"
// import CategoryList from './../components/Category/CategoryList';

export default function Home() {

  return (
      <>
      <Layout>
      {/* <Seo title={"Home Page"}/> */}
      <Banner />
    
        <section>
          <div className="container">
            <div className="row">
              {/* <CategoryList /> */}
              <ProductCategory />

              <div className="col-sm-9 padding-right">
                <FeaturedItems />
                {/* <RecomendedItems />  */}
                <h1>Hello</h1>
              </div>
            </div>
          </div>
        </section>
    </Layout>
      </>
  )
}
