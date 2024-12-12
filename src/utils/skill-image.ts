import react from "../assets/skills/react.svg";
import docker from "../assets/skills/docker.svg";
import python from "../assets/skills/python.svg";
import typescript from "../assets/skills/typescript.svg";
import tailwind from "../assets/skills/tailwind.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import dotnet from "../assets/skills/dotnet.png";
import nestjs from "../assets/skills/nestjs.svg";
import git from "../assets/skills/git.svg";

export const getSkillImage = (skill: string) => {
    const skillId = skill.toLowerCase();

    switch (skillId) {
        case "react":
            return react;
        case "docker":
            return docker;
        case "python":
            return python;
        case "typescript":
            return typescript;
        case "tailwind":
            return tailwind;
        case "kubernetes":
            return kubernetes;
        case "dotnet":
            return dotnet;
        case "nestjs":
            return nestjs
        case "git":
            return git;
        default:
            return react;
    }

}