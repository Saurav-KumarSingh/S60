import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='md:w-[90vw]'>

                <div className='md:flex'>
                    <div className='md:w-30 md:ps-[110px] '>
                        <h3 className='font-semibold md:pt-[100px]'>Enterance Test</h3><br />
                        <p>The Super60 entrance test assesses applicants on a range of skills and knowledge pertinent to their field. Lasting approximately 60 minutes, it gauges proficiency in core subjects such as mathematics, language arts, and logical reasoning. Candidates tackle a series of multiple-choice questions, short answers, and problem-solving tasks. The test aims to identify individuals with exceptional abilities and potential, often for academic scholarships or specialized programs. It may also include sections on critical thinking, creativity, and leadership qualities. Preparation typically involves reviewing fundamental concepts and practicing sample questions. Results from the Super60 test may influence admissions decisions and eligibility for advanced coursework or extracurricular opportunities. 
                        </p>
                    </div>
                    <img
                        className="d-block md:w-[500px]"
                        src="https://img.freepik.com/free-vector/people-checking-giant-check-list-background_23-2148088080.jpg?w=740"
                        alt="First slide"
                    />

                </div>
            </Carousel.Item>
            <Carousel.Item className='md:w-[90vw]'>

                <div className='md:flex'>
                    <div className='md:w-30 md:ps-[110px] '>
                        <h3 className='font-semibold md:pt-[100px]'>Presentation Skills</h3><br />
                        <p>Super60 is an innovative presentation technique designed to convey key information concisely and effectively within a strict time limit of 60 seconds. It emphasizes clarity, brevity, and impactful delivery to captivate audiences and leave a lasting impression. Presenters must distill complex concepts into succinct points, focusing on the most critical aspects of their message. Super60 encourages creativity and strategic thinking, challenging presenters to prioritize content and delivery techniques for maximum impact. It fosters concise storytelling and compelling visuals to engage and hold audience attention. Preparation is crucial, requiring speakers to rehearse meticulously to ensure they convey their message smoothly within the allotted time. Feedback and evaluation play a significant role in refining Super60 presentations, encouraging continuous improvement and refinement of presentation skills. 
                        </p>
                    </div>
                    <img
                        className="d-block md:w-[500px]"
                        src="https://img.freepik.com/free-vector/businessman-with-statistics_23-2147618448.jpg?w=740"
                        alt="First slide"
                    />

                </div>
            </Carousel.Item>
            <Carousel.Item className='md:w-[90vw]'>

                <div className='md:flex'>
                    <div className='md:w-30 md:ps-[100px] '>
                        <h3 className='font-semibold md:pt-[90px]'>Interview</h3><br />
                        <p>Super60 is a rapid-fire interview format where candidates respond to questions within 60 seconds per query. It emphasizes concise and impactful answers, testing both knowledge and communication skills under pressure. Questions typically cover a range of topics relevant to the position or industry. The format aims to assess candidates' ability to think quickly, articulate ideas clearly, and demonstrate expertise within a limited timeframe. Super60 fosters a dynamic interaction between interviewer and interviewee, offering insights into candidates' adaptability and problem-solving abilities. It's particularly suited for roles requiring quick decision-making and effective communication. The format encourages candidates to prioritize information, convey key points succinctly, and maintain composure in high-pressure situations. 
                        </p>
                    </div>
                    <img
                        className="d-block md:w-[500px]"
                        src="https://img.freepik.com/free-vector/hand-drawn-male-team-illustration_23-2150227308.jpg?w=740"
                        alt="First slide"
                    />

                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;