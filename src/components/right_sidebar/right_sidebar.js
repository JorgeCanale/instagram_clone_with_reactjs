import React from "react";
import ProfileSlice from "./profile_slice";
import "./right_sidebar.css";

function Right_side_bar() {
  const sugestedProfiles = [
    { user: "_deleted__bnjx", account: "Benji" },
    { user: "_deleted__bnjx", account: "Benji" },
    { user: "_deleted__bnjx", account: "Benji" },
    { user: "_deleted__bnjx", account: "Benji" },
    { user: "_deleted__bnjx", account: "Benji" },
  ];

  return (
    <>
      <div className=" left-984 sticky w-383px">
        <div>
          <div>
            <ProfileSlice
              uname="_deleted__bnjx"
              aname="Benji"
              alink={`https://www.instagram.com/_deleted__bnjx`}
            />
          </div>
        </div>
        <div className="mr-12px -mb-16px">
          <div className="flex flex-row content-stretch items-center shrink-0 box-border self-auto relative justify-start grow-0 py-4px px-16px ">
            <div className="flex flex-col box-border content-stretch min-w-0 min-h-0 self-auto relative grow items-start ">
              <span className=" block relative whitespace-pre-line max-w-full  min-w-0">
                Sugerencias para ti
              </span>
            </div>
            <a
              className="inline-block relative p-0 border-0 text-center"
              href="no link for you"
            >
              <span className="min-w-0 relative block whitespace-pre-line max-w-full text-center cursor-pointer">
                Ver todo
              </span>
            </a>
          </div>
          <div className=" flex flex-col mb-4px ml-4px content-stretch box-border shrink-0 grow-0 self-auto items-stretch justify-start relative">
            <div className="py-8px flex flex-col box-border shrink-0 grow-0 static self-auto content-stretch justify-start">
              <div className="h-auto">
                {sugestedProfiles &&
                  sugestedProfiles.map((suggestion, index) => {
                    return (
                      <div className="block w-full max-w-full ">
                        <div className="flex flex-col box-border content-stretch items-stretch justify-start static py-8px px-16px ">
                          <ProfileSlice
                            uname={suggestion.user}
                            aname={suggestion.account}
                            alink={`https://www.instagram.com/${suggestion.user}`}
                            key={index}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col box-border content-stretch self-auto static justify-start items-start grow-0  px-16px mb-8px">
          <div className=" pb-38px w-full">
            <nav className="flex flex-col mb-16px max-w-full">
              <ul className=" list-none grow mb-4px box-content">
                <li className="inline-flex flex-row m-0 align-baseline list-none ">
                  <a href="https://www.linkedin.com/in/jorge-canale-fullstack-react/">
                    <span className="block break-words whitespace-pre-line relative max-w-full m-0 ">
                      LinkedIn
                    </span>
                  </a>
                </li>
                <li className="inline-flex flex-row m-0 align-baseline list-none ">
                  <a href="https://github.com/JorgeCanale">
                    <span className="block break-words whitespace-pre-line relative max-w-full m-0 ">
                      Github
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Right_side_bar;
