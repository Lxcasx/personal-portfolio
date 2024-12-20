
import { personalInfo } from "../../constants";
import section from "../../assets/section.svg";
import blur23 from "../../assets/blur-23.svg";
import { GlowCard } from "../display/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import { AnimationLottie } from "../display/animation-lottie";
import code from "../../assets/lottie/code.json";
import { SectionHeading } from "../display/heading/section-heading";

export function ExperiencesSection() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={section}
        alt="Section"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <SectionHeading direction="row">Experiences</SectionHeading>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={code} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                personalInfo.experiences.map((experience, index)=> (
                  <GlowCard key={index} identifier={`experience-${index}`}>
                    <div className="p-3 relative">
                      <img
                        src={blur23}
                        alt="Blur"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-cyan-500">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};