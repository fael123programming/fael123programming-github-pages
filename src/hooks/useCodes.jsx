import React from "react";
import { useAppState } from "../state/AppStateContext";
import { TbBrandCpp, TbBrandPython } from "react-icons/tb";
import { RiJavaFill } from "react-icons/ri";

export default function useCodes() {
  const { dict } = useAppState();

  return [
    {
      language: "cpp",
      code: dict.cppCode,
      icon: <TbBrandCpp className="prog-lang-brand" />,
    },
    {
      language: "python",
      code: dict.pythonCode,
      icon: <TbBrandPython className="prog-lang-brand" />,
    },
    {
      language: "java",
      code: dict.javaCode,
      icon: <RiJavaFill className="prog-lang-brand" />,
    }
  ];
}
