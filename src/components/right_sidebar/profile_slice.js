import React from "react";
import pfp from "../../assets/benji_pfp.jpg"



function ProfileSlice ({uname,aname, alink}){


    return(
        <div className="cursor-pointer grow">
        <div className=" flex flex-row items-center justify-between shrink-0 flex-wrap box-border relative">
            <div className="flex flex-col self-center box-border relative shrink-0 z-0 max-w-full">
                <div className="content-stretch box-border shrink-0 static mr-3 flex flex-col self-stretch justify-start grow-0 ">
                    <div className=" block relative w-11">
                        <a className="inline-block" href={alink}  tabIndex="0">
                            <img className="h-full w-full rounded-full" src={pfp} alt="pfp"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="box-border relative z-0 flex grow shrink min-w-0  items-center flex-wrap flex-row basis-auto justify-between">
                <div className="box-border relative z-0 flex grow min-w-0 shrink-0 flex-col max-w-full ">
                    <div className="box-border flex grow min-w-0 static justify-start items-start flex-col min-h-0 content-stretch self-auto "> 
                        <span className=" relative min-w-0 mb-0  whitespace-pre-line  block max-w-full " dir="auto">
                            <span className="font-semibold text-ellipsis block max-w-full whitespace-nowrap">
                                <div className="box-border flex flex-row static justify-start content-stretch whitespace-nowrap items-stretch">
                                    <div className="inline">
                                        <div className="inline">
                                            <a className="inline" href={alink}>{uname}</a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </span>
                        <span className="account_name">
                            <div>
                                <a href={alink}>{aname}</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="content_link">
                <button className="border-none bg-transparent inline-block  relative cursor-pointer p-0">
                    <span>Cambiar</span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default ProfileSlice