import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import EVIDENTLY from "@/public/EVIDENTLY.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "e-library",
    location: "Djibouti, Djibouti",
    description:
      "I graduated after 7 months of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "ArchiveApp",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 1 years in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "e-library",
    description:
      "I developed an e-library specifically for university purposes, designed to offer several significant advantages tailored to the needs of students, faculty, and the institution.",
    tags: ["Django", "Tailwind", "MySql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ArchiveApp",
    description:
      "The ArchiveApp I developed is designed to offer a comprehensive solution for managing and preserving important documents and records particularly in Company.",
    tags: ["Laravel", , "javascript.js", "bootstrap"],
    imageUrl: rmtdevImg,
  },
  {
    title: "EVIDENTLY",
    description:
      "The tool I developed for describing data analytics related to identity cards offers valuable insights into the distribution and trends of new and old identity cards within a user base.",
    tags: ["Python", "Jubiter", "PGSQL", "Pandas", "Streamlit"],
    imageUrl: EVIDENTLY,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
