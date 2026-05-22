import banner from '../assets/banner.png'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" />
    </div>
  )
}

export default Banner