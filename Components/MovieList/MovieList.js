import MovieItem from "../MovieItem/MovieItem";
import './MovieList.css'
function MovieList() {
    return (
        <>
            <h1>Featured Movies</h1>
            <div className='movie-list' >
                <MovieItem imgAddress='https://i.pinimg.com/originals/86/55/80/865580314a24d809e6fb0f12ce72e738.jpg' />
                <MovieItem imgAddress='https://i.pinimg.com/originals/3f/d0/07/3fd0077efe4582fa937dd43fd8ef22d7.jpg' />
                <MovieItem imgAddress='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af48b582167047.5d14eb6683b63.jpg' />
                <MovieItem imgAddress='https://i.pinimg.com/originals/54/b0/3e/54b03e6da817096f9dae73c23070fda6.jpg' />
                <MovieItem imgAddress='https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images-medium-5/no240-my-inception-minimal-movie-poster-chungkong-art.jpg' />
                <MovieItem imgAddress='https://cdn.shopify.com/s/files/1/0969/9128/products/Movie_Poster_Art_-_The_Godfather_-_Tallenge_Hollywood_Poster_Collection_83746b88-1a0e-4c9f-b75f-c2c6d8b8a5cd.jpg?v=1570156520' />
            </div>
        </>
    );
}
export default MovieList;