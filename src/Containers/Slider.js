import React, {useEffect} from "react";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import './Slider.scss';

function Slider() {

    let slideIndex = 1;
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }
    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }


    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }


    let autoSlide = 0;

    function autoShowSlides() {
        let i;
        let slide = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        autoSlide++;
        if (autoSlide > slide.length) {
            autoSlide = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slide[autoSlide - 1].style.display = "block";
        dots[autoSlide - 1].className += " active";
        setTimeout(autoShowSlides, 5000);
    }

    useEffect(() => {
        showSlides(slideIndex);
        autoShowSlides();
    }, [])

    return (
        <div className="Slider">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt=""/>
                    {/*<div class="text">Caption Text</div>*/}
                </div>
                <div className="mySlides fade">
                    <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt=""/>
                    {/*<div class="text">Caption Two</div>*/}
                </div>
                <div className="mySlides fade">
                    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
                    {/*<div class="text">Caption Three</div>*/}
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}><BsArrowRightCircleFill/></a>
                <a className="next" onClick={() => plusSlides(1)}><BsArrowLeftCircleFill/></a>
            </div>
            <div className='handleSliders'>
                <span className="dot" onClick={() => currentSlide(1)}/>
                <span className="dot" onClick={() => currentSlide(2)}/>
                <span className="dot" onClick={() => currentSlide(3)}/>
            </div>
        </div>
    );
}

export default Slider;
