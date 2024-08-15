import React from 'react';

const Skills = ({content}) => {
    return (
        <div name='skills' className='w-full h-full sm:h-screen sm:pb-0 pb-12 bg-[#262626] text-white'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className="text-5xl font-bold inline text-center">
                        Skills
                    </p>
                    <p className="py-6 text-2xl">{content?.fields.skills_header}</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {content?.fields.skills.map((skill, index) => {
                        return (
                            <div className="bg-[#9D9D9D] hover:bg-[#9ACD32] text-xl font-medium shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500" key={index}>
                                <p className="my-4">{skill.terminology_learnt}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Skills;
