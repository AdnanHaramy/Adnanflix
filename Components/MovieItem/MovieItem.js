import { AiOutlineHeart, AiOutlinePlus, AiFillPlayCircle } from '/node_modules/react-icons/ai'
import './MovieItem.css'
function MovieItem(props) {
    return (
        <div className='movie-container'>
            <img src={props.imgAddress} alt="" />
        </div>
    );
}
export default MovieItem;