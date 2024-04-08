

import React, { useRef } from "react";
import Slider from "react-slick";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
          <div className="md:px-10 h-[510px] px-1 md:h-[420px]  w-[90%] shadow-md rounded-md my-10 ms-10"> <br />
            <p className='md:h-[230px] h-[270px] overflow-hidden'>
              I am Yash Khandelwal from B.Tech (CSE) at SVIET. It's every student dream to grab an opportunity with a multinational company and that too at a munificent package and Sviet, Banur always helped me out to achieve this milestone and giving me ample opportunities to learn and thrive. Am immensly elated to say that I got placed in INFOSYS as a System Engineer with the package of 3.6 LPA.  Choosing SVIET was one of the best decisions I have ever made. Thankyou, SVIET for providing me this career success.</p>
            <br />
            <div className="md:flex gap-3">
              <img className="rounded-[50%] h-[100px] w-[100px]" src="https://sviet.ac.in/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-02-at-12.21.29-AM-1.jpeg" alt="Yash Khandelwal" />
              <div className="p-3 text-orange-500">
                <h3 className='font-semibold'>Yash Khandelwal</h3>
                <p>B.Tech (CSE)</p>
                <p>Infosys</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:px-10 h-[510px] px-1 md:h-[420px]  w-[90%] shadow-md rounded-md my-10 ms-10"> <br />
            <p className='md:h-[230px] h-[270px] overflow-hidden'>
              
						SVIET has been a catalyst for my personal and professional growth. The exposure to industry-relevant projects and collaborative learning has been exceptional. The encouragement to think innovatively and the guidance from mentors have been instrumental. SVIET's supportive ecosystem has not only enriched my academic journey but has also empowered me to chase my ambitions with confidence.</p>
            <br />
            <div className="md:flex gap-3">
              <img className="rounded-[50%] h-[100px] w-[100px]" src="https://sviet.ac.in/wp-content/uploads/2023/12/Isha-kumari-sharma-scaled.jpg" alt="Isha Kumari" />
              <div className="p-3 text-orange-500">
                <h3 className='font-semibold'>Isha Kumari</h3>
                <p>B.Tech (CSE)</p>
                <p>Ellocent Labs</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:px-10 h-[510px] px-1 md:h-[420px]  w-[90%] shadow-md rounded-md my-10 ms-10"> <br />
            <p className='md:h-[230px] h-[270px] overflow-hidden'>
              
						I am grateful I was able to attend SVIET and graduate, and also grateful to all of those who helped me along the way to be successful. I love SVGOI and I felt prepared to go into the job market due to the education I was given. I had a great experience and thankful to those who  helped me along the way.</p>
            <br />
            <div className="md:flex gap-3">
              <img className="rounded-[50%] h-[100px] w-[100px]" src="https://sviet.ac.in/wp-content/uploads/2022/09/Md-tausif-Alam-b.tech-cse.jpeg" alt="Md. Tausif Alam" />
              <div className="p-3 text-orange-500">
                <h3 className='font-semibold'>Md. Tausif Alam</h3>
                <p>B.Tech (CSE)</p>
                <p>IDS Infotech</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:px-10 h-[510px] px-1 md:h-[420px]  w-[90%] shadow-md rounded-md my-10 ms-10"> <br />
            <p className='md:h-[230px] h-[270px] overflow-hidden'>
              
						The placements conducted in SVIET was very streamlined and organized. I am really glad that I got placed in Infosys and I thank the entire placement team of SVGOI for making this happen. I knew that Infosys is among the top IT companies in India and definitely a great place to start my professional career. Getting placed in such a prestigious company is the best feeling, it all happened because of SVIET.					</p>
            <br />
            <div className="md:flex gap-3">
              <img className="rounded-[50%] h-[100px] w-[100px]" src="https://sviet.ac.in/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-09-at-3.13.50-AM-1.jpeg" alt="Prince Kumar" />
              <div className="p-3 text-orange-500">
                <h3 className='font-semibold'>Prince Kumar</h3>
                <p>B.Tech (CSE)</p>
                <p>Infosys</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:px-10 h-[510px] px-1 md:h-[420px]  w-[90%] shadow-md rounded-md my-10 ms-10"> <br />
            <p className='md:h-[230px] h-[270px] overflow-hidden'>
              
						SVIET College has helped me to improve myself. I was able to enjoy all my classes, and I feel better about having to present in the class because I have great and supportive instructors. Being involved in college activities also helped me to create some meaningful memories at College and connect me with a lot of people. My experience in SVIET College has helped me grow in a lot of ways and now I am excited to look for new challenges in a new workplace like wipro, while pursuing my dreams.					</p>
            <br />
            <div className="md:flex gap-3">
              <img className="rounded-[50%] h-[100px] w-[100px]" src="https://sviet.ac.in/wp-content/uploads/2022/01/fhhh.jpg" alt="Ritik" />
              <div className="p-3 text-orange-500">
                <h3 className='font-semibold'>Ritik</h3>
                <p>B.Tech (CSE)</p>
                <p>Wipro</p>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;
