import React, { useState, useEffect } from "react";
import { useAppState } from "../../state/AppStateContext";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Home.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import useCodes from "../../hooks/useCodes";
import useTitles from "../../hooks/useTitles";

export default function Home() {
  const { menuOpen, dict } = useAppState();

  const titles = useTitles();

  const [titleIndex, setTitleIndex] = useState(0);

  const codes = useCodes();

  const [code, setCode] = useState(codes[0]);

  const [codeIndex, setCodeIndex] = useState(0);

  const [strIndex, setStrIndex] = useState(0);

  useEffect(() => {
    if (!document.getElementById("home")) {
      return;
    }
    if (!document.getElementById("header")) {
      return;
    }
    document.getElementById("home").style.paddingTop =
      document.getElementById("header").offsetHeight + "px";
  }, [menuOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (strIndex === code.code.length) {
        const innerTout = setTimeout(() => {
          setStrIndex(0);
          if (codeIndex >= codes.length - 1) {
            setCodeIndex(0);
            setCode(codes[0]);
          } else {
            setCodeIndex(codeIndex + 1);
            setCode(codes[codeIndex + 1]);
          }
          if (titleIndex === titles.length - 1) {
            setTitleIndex(0);
          } else {
            setTitleIndex(titleIndex + 1);
          }
          clearTimeout(innerTout);
        }, 5000);
      } else {
        setStrIndex(strIndex + 1);
      }
    }, 5);
  }, [codes, codeIndex, code, strIndex, titleIndex, titles]);

  return (
    <div id="home" >
      <div className="hero-el">
        <div className="hero-el-row">
          <div className="hero-el-col">
            <h1 className="i-am">
              {dict.homeIAm}&nbsp;
              <span className="title-anim-span">{titles[titleIndex]}</span>
            </h1>
          </div>
          <div className="hero-el-col">{code.icon}</div>
        </div>
        <div id="code-wrapper" className="hero-code-row">
          <SyntaxHighlighter
            language={code.language}
            showLineNumbers={true}
            style={dark}
            wrapLines={true}
            className="syntax-high"
          >
            {code.code.slice(0, strIndex)}
          </SyntaxHighlighter>
        </div>
      </div>
      <img
        src={require("../../assets/rafael-removebg-preview.png")}
        className="img-rafael-background"
        alt="Background of Rafael"
      />
    </div>
  );
}
