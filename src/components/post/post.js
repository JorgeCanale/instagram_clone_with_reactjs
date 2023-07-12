import React, {useState} from "react";
import LittleKittens from "../../assets/kittens.jpg"
import profile from "../../assets/pfp.jfif"


function Post( {account}){


    return(
       <div className="flex flex-col w-full h-full mb-24px  border-b border-b-black ">
        <div className="block pb-12px pl-4px">
            <div className="flex flex-row items-center w-full content-start ">
                <div className=" mr-12px">
                    <div className="block">
                        <div className="block">
                            <div className="block relative">
                                <a className=" flex flex-col box-border rounded-full p-0 border-l-0 border-t-0 shrink-0 min-h-0 cursor-pointer items-stretch  relative ml-0 basis-auto h-32px w-32px" href="https://www.instagram.com/_deleted__bnjx/">
                                    <img className=" w-ful h-full p-0  m-0 " src={profile} alt=""></img>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className=" content-stretch min-w-0 flex flex-row items-center justify-start static grow">
                    <div className=" w-full flex flex-col content-stretch justify-center shrink-0 self-auto grow-0 ">
                        <div className="content-stretch flex flex-row shrink-0 grow-0 box-border items-center  static justify-start">
                            <div className="">
                                <div className="content-stretch box-border flex flex-row items-center static ">
                                    <span className="">
                                        <a className=" inline box-border cursor-pointer text-inherit list-none " href="https://www.instagram.com/_deleted__bnjx/">
                                            {account ? account.name : "_deletd__bnjx"}
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="content-stretch box-border flex flex-row  items-center shrink-0 grow-0 static  self-auto">
                                <span className=" ml-4px mr-4px inline ">.</span>
                                <div className="content-stretch flex flex-col box-border shrink-0 grow-0 static items-start self-auto ">
                                    <a className=" inline box-border cursor-pointer text-inherit list-none outline-none " href={account ? account.post : "post not founded"}>
                                        <time dateTime="2023-07-09T17:07:07.000Z" title="jul 9, 2023">2 dias</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Post