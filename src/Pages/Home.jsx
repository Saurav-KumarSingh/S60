import React from 'react';
import Card from '../Component/Cardslider'
import ProcessJoin from '../Component/ProcessJoin'


const Home = () => {

  return (
    <div>
      
      {/* Hero Section */}
      <section className=" text-white ">

        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="./Images/S60.jpg" alt="Background Image" class=" object-cover object-center  w-full h-full" style={{filter:'brightness(0.4)'}} />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center pt-[20vh] md:pt-[18vh] items-center h-full text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Super60
            </h1>
            <p className="mt-4 text-lg text-white sm:text-xl md:text-2xl lg:text-3xl">
              A Special Batch for Computer Science Engineering Enthusiasts
            </p>

          </div>
        </div>

      </section>


      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 mx-3 md:px-1 pb-2  border-b-2 px-1 border-orange-400 inline-block md:ms-4">About Super60</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] mx-2">
            <div>
              <p className="text-lg md:ms-4">
              Super60 is a special batch of 60 students, chosen every year from the first year students of CSE Branch, in order to make them ready to face challenges beyond their prescribed curriculum. They are provided with enriched learning modules based on their potential and put through rigorous academic as well as co and extra curricular activities included reasoning, Quantative skills, Communication Skills, Personality developmnent and over & above latest softwares and manufacturing techniques as latest trend, so that these students can make the best version of themselves and assure 100% placement in the campus placement drive.
              </p>
            </div>
            <div>
              <img src="./Images/Logo2.png" alt="Super60" className=" rounded-lg object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* feature */}

      {/* Features Section */}
      <section className=" py-20 mx-2">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 mx-3 md:px-1 pb-2  border-b-2 px-1 border-orange-400 inline-block md:ms-4">Key Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div >
              <img src="./Images/image.png" alt="Feature 1" className=" h-[15rem] w-[17.5rem] mx-auto mb-4 " />
              <h3 className="text-lg font-bold mb-2 mx-auto">Advance Lab</h3>
              <p className="text-base text-left mx-auto">A dynamic environment where students apply theoretical concepts to real-world problems under experienced faculty.</p>
            </div>
            <div >
              <img src="https://static.wixstatic.com/media/11062b_df307ce24d314843a9cc3d5c0850e4e0~mv2.jpg/v1/fill/w_640,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_df307ce24d314843a9cc3d5c0850e4e0~mv2.jpg" alt="Feature 2" className="h-[15rem] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Expert Mentors</h3>
              <p className="text-base  text-left mx-auto">Expert mentors play a vital role in guiding individuals towards mastery and success in their chosen field.</p>
            </div>
            <div >
              <img src="https://miro.medium.com/v2/resize:fit:1200/1*uvIT6Le23U68DICmEeqpYA.jpeg" alt="Feature 3" className="h-[15rem] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Personalized Learning Plans</h3>
              <p className="text-base  text-left mx-auto">Specialized tutoring and support services for students with learning disabilities.</p>
            </div>
            <div >
              <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-160390,resizemode-75,msid-99779913/jobs/fresher/career-guidance-what-it-is-when-you-need-it-and-how-it-helps-shape-your-future.jpg" alt="Feature 3" className="h-[15rem] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Career Guidance</h3>
              <p className="text-base  text-left mx-auto">Offering comprehensive information about various industries, job roles, educational pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 mx-3 md:px-1 pb-2  border-b-2 px-1 border-orange-400 inline-block md:ms-4">Student Testimonials</h2>

          <Card/>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" py-20">
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 mx-3 md:px-1 pb-2  border-b-2 px-1 border-orange-400 inline-block md:ms-4">Selection Process of Super60</h2>
          <ProcessJoin/>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default Home;
