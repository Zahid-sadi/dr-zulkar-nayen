import proPic from '@/public/Images/zulkar.png';
import Image from "next/image";

const Hero = () => {
    return (
        <div
            id=""
            className="h-fit relative md:h-[800px] bg-opacity-45 w-full flex flex-col-reverse md:flex-row items-start justify-between  bg-cyan-500"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
            ></div>
            <Image
                className="h-96 1/2 md:w-1/2 z-30"
                src={proPic}
                height={900}
                width={900}
                alt="dr photo"
            ></Image>
            <div className="w-full md:w-1/2 rounded-l-xl bg-black -500  bg-opacity-45 z-20 mx-auto py-10 px-6 ">
                <h2 className="text-5xl mb-5 font-bold text-gray-50 ">Dr.Zulkar Nayen</h2>

                <p className=" max-w-xl text-gray-100">
                    Welcome to my neurology portfolio, where science meets compassion in understanding the complexities
                    of the human brain and nervous system. With a focus on cutting-edge research, advanced diagnostic
                    techniques, and patient-centered care, I am dedicated to improving neurological health and enhancing
                    lives. Explore my achievements, publications, and vision for advancing the field of neurology.
                </p>
            </div>
        </div>
    );
};

export default Hero;