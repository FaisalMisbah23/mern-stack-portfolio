import React, { useState ,useEffect} from 'react';

const Works = ({ content }) => {
  const [screen, setScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 350) {
        setScreen(false);
      }
      else {
        setScreen(true);
      }
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div name="work" className="w-full md:h-full text-white bg-[#262626] py-12 sm:py-[4.5rem]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-5xl font-bold inline">Works</p>
          <p className="text-center py-6 text-2xl">{content?.fields.work_header}</p>
        </div>
        {/* Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Grid Item */}
          {content?.fields.works.map((work, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${work.work_image})`,
                  backgroundSize: 'contain', // Ensure image covers the entire grid item
                  backgroundPosition: 'center', // Center the image
                  backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                }}
                className="relative shadow-lg shadow-[#040c16] group rounded-md flex items-center justify-center mx-auto h-64 w-full overflow-hidden"
              >
                {/* Hover Effects */}
                <div className="rounded-md opacity-0 group-hover:opacity-100 group-hover:bg-[#333333] w-full h-full flex justify-center items-center flex-col">
                  <span className="text-center text-lg font-bold text-white tracking-wider">
                    {work.work_title}
                  </span>
                  <p className="text-center mx-2">{work.work_description}</p>
                  <div className="text-sm flex flex-wrap items-center mt-3 gap-x-2 gap-y-4 mx-2">
                    {screen && work.stack.split(',').map((s, idx) => (
                      <p
                        key={idx} s
                        className="text-center p-2 hover:bg-[#9ACD32] bg-[#9D9D9D] hover:scale-110 duration-500 rounded-full"
                      >
                        {s}
                      </p>
                    ))}
                  </div>
                  <div className="pt-3 text-center flex items-center gap-4">
                    <a href={work.demo}>
                      <button className="rounded-md px-4 py-2 my-2 bg-[#9D9D9D] hover:bg-[#9ACD32] text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={work.github_url}>
                      <button className="rounded-md px-4 py-2 my-2 bg-[#9D9D9D] hover:bg-[#9ACD32] text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
