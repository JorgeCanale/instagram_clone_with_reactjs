import React, { useState } from "react";
import LittleKittens from "../../assets/kittens.jpg";
import profile from "../../assets/pfp.jfif";

function Post({ account }) {
  const comments = "todavia no hice la seccion de comentarios del post :(";

  return (
    <div className="flex flex-col w-full h-full pb-16px mb-24px  border-b border-b-black ">
      <div className="block pb-12px pl-4px">
        <div className="flex flex-row items-center w-full content-start ">
          <div className=" mr-12px">
            <div className="block">
              <div className="block">
                <div className="block relative">
                  <a
                    className=" flex flex-col box-border rounded-full p-0 border-l-0 border-t-0 shrink-0 min-h-0 cursor-pointer items-stretch  relative ml-0 basis-auto h-32px w-32px"
                    href="https://www.instagram.com/_deleted__bnjx/"
                  >
                    <img
                      className=" w-ful h-full p-0  m-0 "
                      src={profile}
                      alt=""
                    ></img>
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
                      <a
                        className=" inline box-border cursor-pointer text-inherit list-none "
                        href="https://www.instagram.com/_deleted__bnjx/"
                      >
                        {account ? account.name : "_deletd__bnjx"}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="content-stretch box-border flex flex-row  items-center shrink-0 grow-0 static  self-auto">
                  <span className=" ml-4px mr-4px inline ">.</span>
                  <div className="content-stretch flex flex-col box-border shrink-0 grow-0 static items-start self-auto ">
                    <a
                      className=" inline box-border cursor-pointer text-inherit list-none outline-none "
                      href={account ? account.post : "post not founded"}
                    >
                      <time
                        dateTime="2023-07-09T17:07:07.000Z"
                        title="jul 9, 2023"
                      >
                        2 dias
                      </time>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" content-stretch flex flex-row  box-border items-center static shrink-0 grow-0 self-auto justify-start">
            <div className="content-stretch flex flex-col mr-8px box-border shrink-0 grow-0  static items-stretch self-auto justify-start ">
              <div className=" h-24px w-24px content-stretch justify-center flex flex-col  box-border items-center shrink-0 grow-0  relative self-auto cursor-pointer text-inherit list-none">
                <svg
                  className="block relative cursor-pointer text-inherit list-none "
                  aria-label="Más opciones"
                  class="_ab6-"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shrink-0 ">
        <div className="flex flex-col box-border shrink-0 items-stretch relative ">
          <div className=" w-468px">
            <div className="block relative ">
              <img src={LittleKittens} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="block relative">
        <div className="flex flex-col h-full relative">
          <div>
            <div className="grid grid-cols-2 items-center my-4px">
              <div className="flex">
                <span>
                  <div
                    className="justify-center p-8px border-none flex box-border items-center cursor-pointer"
                    role="button"
                  >
                    <div className="flex flex-col justify-center items-center cursor-pointer text-inherit ">
                      <svg
                        aria-label="Me gusta"
                        className="block relative cursor-pointer text-inherit list-none  "
                        color="rgb(38, 38, 38)"
                        fill="rgb(38, 38, 38)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Me gusta</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </div>
                  </div>
                </span>
                <span>
                  <div
                    className=" p-8px flex items-center cursor-pointer border-none text-inherit outline-none"
                    role="button"
                  >
                    <div className="flex flex-col justify-center items-center cursor-pointer ">
                      <svg
                        aria-label="Comentar"
                        className=" block relative text-inherit cursor-pointer"
                        color="rgb(0, 0, 0)"
                        fill="rgb(0, 0, 0)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Comentar</title>
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>
                <button className="flex items-center justify-center border-none cursor-pointer p-8px border-0  bg-transparent">
                  <div className="flex justify-center items-center">
                    <svg
                      aria-label="Compartir publicación"
                      className=" block relative cursor-pointer"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Compartir publicación</title>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="">
                <div className="flex box-border justify-center items-center cursor-pointer">
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <svg
                      aria-label="Guardar"
                      className="relative block cursor-pointer"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Guardar</title>
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <section className="">
              <div className=" flex flex-row content-stretch bg-transparent  box-border items-center justify-start relative">
                <div className="flex flex-col content-stretch  box-border self-auto relative justify-start grow items-start flex-wrap">
                  <span></span>
                </div>
              </div>
            </section>
            <div className="flex flex-col content-stretch box-border mt-8px static items-stretch  justify-start">
              <div className="inline-block box-border shrink-0  static self-auto grow-0">
                <div className=" mr-4px  inline-block">
                  <a
                    className=" inline appearance-none  cursor-pointer text-center relative z-0 "
                    href="https://www.instagram.com/_deleted__bnjx/"
                  >
                    _deletd__bnjx
                  </a>
                </div>
                <span className="">
                  <span className=""> este es un post de prueba</span>
                </span>
              </div>
            </div>
            <div className="mt-8px flex flex-col box-border  content-stretch static items-stretch justify-start">
              <div className=" flex flex-col box-border content-stretch static self-auto shrink-0 grow-0 justify-start items-start">
                <a
                  className="inline  box-border cursor-pointer"
                  href={comments}
                >
                  <span> hay 13 comentarios</span>
                </a>
              </div>
            </div>
            <div className="mt-8px flex flex-col box-border static items-stretch justify-start">
              <div className="flex flex-row flex-wrap items-center">
                <form className="border-none flex flex-row grow shrink">
                  <div className="flex flex-row items-center grow shrink">
                    <div className="order-3"></div>
                    <textarea
                      className="border-none resize-none flex grow outline-none max-w-full h-18px max-h-80px"
                      placeholder="Añade un comentario..."
                      aria-label="Aañade un comentario..."
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
