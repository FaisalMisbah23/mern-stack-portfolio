import React from "react";

const About = ({content}) => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-full sm:h-screen sm:pb-0 pb-12 bg-[#262626] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:py-16 py-8 rounded-md bg-[#9D9D9D] hover:bg-[#9ACD32] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-5xl font-bold inline">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                {content?.fields.about_caption}
              </p>
            </div>
            <div>
              <p>
                {" "}
                {content?.fields.about_main_details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;