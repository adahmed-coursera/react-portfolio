import './Slider.scss';
import { sliderImages }  from '../../utils/images';

const Slider = () => {
    const [slider_img_1] = sliderImages
    return (
    <div className='hero-slider'>
        <div className='hero-slider-item'>
            <img src={slider_img_1} alt='' />
        </div>
    </div>
    )
}
export default Slider