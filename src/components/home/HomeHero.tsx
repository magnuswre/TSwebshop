import { Link } from 'react-router-dom'
import HeroImage from '../../assets/home-hero-image.png'

const HomeHero = () => {

   return (
    <div className='home-hero-container'>
      <div className='home-hero-top'>
        <p>WELCOME TO SINGAPORE TEA SHOP</p>
        <h1 className='italic-text'>"Exclusive tea from all over the world"</h1>
        

        
      </div>
      <div className='home-hero-bot'>
        <div className='image-container'>
          <img src={HeroImage} alt={HeroImage} />
        </div>
        <Link to={`/product/`}><button className='button' id='home-hero-btn' >shop now</button></Link>
      </div>
    </div>
  )
}

export default HomeHero