import HomeHero from '../components/home/HomeHero'
import Collection from '../components/home/Collection'
import ProductContextProvider from '../contexts/ProductContext'
import Admin from '../components/admin/Admin'

const Home = () => {

  return (
    <div>
      <HomeHero />

      <ProductContextProvider>
        <Collection />
      </ProductContextProvider>
      <Admin />

    </div>
  )
}

export default Home