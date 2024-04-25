import AboutMainImg from "../assets/AboutMainImg.png"
import Apj from "../assets/Apj.jpg";
import Billgates from "../assets/Billgates.jpg";
import NelsonMandela from "../assets/NelsonMandela.jpg"
import SteveJobs from "../assets/SteveJobs.jpg"
import HomeLayout from "../layouts/HomeLayout";

const Aboutus=()=>{
    return(
        <HomeLayout>
            <div className="flex flex-col  text-white  pt-20 md:pl-20 min-h-[90vh] justify-between">
                <div className="flex flex-col-reverse md:flex-row items-center md:gap-5 mx-10">
                    <section className="md:w-1/2 w-full space-y-10">
                        <h1 className="md:text-5xl text-3xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="md:text-xl text-gray-200">
                            Our goal is to provide the affordable and good qaulity eduction to yhe world. We are provinding the plaform for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                        </p>

                    </section>
                    <div className="md:w-1/2 w-full ">
                        <img src={AboutMainImg} className="drop-shadow-2xl" alt="About  Us Image"/>
                    </div>

                </div>
                <div className="carousel md:w-1/2 my-10 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center gap-4 px-[15%]">
                        <img src={NelsonMandela} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                        <p>Eduction is the most powerful wepon which you can use to change the world</p>
                        <h3 className="font-semibold text-xl text-yellow-500">Nelson Mandela</h3>

                        <div className="absolute flex justify-between transform translate-y-1/2  left-0 right-0 top-1/2 ease-in-out">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center gap-4 px-[15%]">
                        <img src={Billgates} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                        <p>Success is a lousy teacher. It seduces smart people into thinking they can’t lose.</p>
                        <h3 className="font-semibold text-xl text-yellow-500">Bill Gates</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0  top-1/2 ease-in-out">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center gap-4 px-[15%]">
                        <img src={SteveJobs} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                        <p>Your time is limited, so don’t waste it living someone else’s life.</p>
                        <h3 className="font-semibold text-xl text-yellow-500">Steve Jobs</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0  top-1/2 ease-in-out">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center gap-4 px-[15%]">
                        <img src={Apj} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                        <p>Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.</p>
                        <h3 className="font-semibold text-xl text-yellow-500">APJ Abdul Kalam</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0  top-1/2 ease-in-out">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}

export default Aboutus;