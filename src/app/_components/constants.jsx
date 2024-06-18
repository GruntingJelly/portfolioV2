import { FaAngleLeft, FaAngleRight, FaMagnifyingGlass } from "react-icons/fa6";

export const cards = [
  {
    icon: [
      <FaAngleLeft key="left" className="text-liquid-lava h-16 w-16" />,
      <FaAngleRight key="right" className="text-liquid-lava h-16 w-16" />,
    ],
    title: "Web Development",
    text: "4 Projects",
  },
  {
    icon: [
      <FaMagnifyingGlass className="text-liquid-lava h-16 w-16" key="left" />,
    ],
    title: "Web Development",
    text: "4 Projects",
  },
  {
    icon: [
      <FaAngleLeft key="left" className="text-liquid-lava h-16 w-16" />,
      <FaAngleRight key="right" className="text-liquid-lava h-16 w-16" />,
    ],
    title: "Web Development",
    text: "4 Projects",
  },
  {
    icon: [
      <FaAngleLeft key="left" className="text-liquid-lava h-16 w-16" />,
      <FaAngleRight key="right" className="text-liquid-lava h-16 w-16" />,
    ],
    title: "Web Development",
    text: "4 Projects",
  },
];

export const deets = [
  { Number: 1, text: "BPSU Graduated" },
  { Number: 95, text: "BPSU Graduated" },
  { Number: 4, text: "BPSU Graduated" },
  { Number: 35, text: "BPSU Graduated" },
];

export const projects = [
  { name: "all", id: "all" },
  { name: "UI/UX", id: "uiux" },
  { name: "web development", id: "webdevelopment" },
  { name: "Marketing", id: "" },
];
