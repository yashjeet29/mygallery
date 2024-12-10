import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/1.jpg", alt: "School" },
    { src: "/2.jpg", alt: "Fighter Plane" },
    { src: "/3.jpg", alt: "3" },
    { src: "/4.jpg", alt: "4", },
    { src: "/5.jpg", alt: "5", },
    { src: "/6.jpg", alt: "6", },
    { src: "/7.jpg", alt: "7", },
    { src: "/8.jpg", alt: "8", },
    { src: "/9.jpg", alt: "9", },
    { src: "/10.jpg", alt: "10", },
    { src: "/11.jpg", alt: "11", },
    { src: "/12.jpg", alt: "12", },
    { src: "/13.jpg", alt: "13", },
    { src: "/14.jpg", alt: "14", },
    { src: "/15.jpg", alt: "15", },
    { src: "/16.jpg", alt: "16", },
    { src: "/17.jpg", alt: "17", },
    { src: "/18.jpg", alt: "18", },
    { src: "/19.jpg", alt: "19", },
    { src: "/20.jpg", alt: "20", },
    { src: "/21.jpg", alt: "21", },
    { src: "/22.jpg", alt: "22", },
    { src: "/23.jpg", alt: "23", },
    { src: "/24.jpg", alt: "24", },
    { src: "/26.jpg", alt: "25", },
    { src: "/27.jpg", alt: "26", },
    { src: "/28.jpg", alt: "27", },
    { src: "/29.jpg", alt: "28", },
    { src: "/30.jpg", alt: "29", },
    { src: "/31.jpg", alt: "30", },

]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}
