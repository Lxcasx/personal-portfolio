import { personalInfo } from "../../constants";
import avatar from "../../assets/avatar.svg";
import { SectionHeading } from "../display/heading/section-heading";

export function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <SectionHeading direction="column">About Me</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-cyan-500 text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalInfo.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={avatar}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};