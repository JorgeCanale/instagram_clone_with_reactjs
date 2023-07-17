import React, { useState } from "react"
import pfp from "../../assets/pfp.jfif"
import logo from "../../assets/logo.png"
import {
  CreateIcon,
  CreateSelectedIcon,
  ExploreIcon,
  ExploreSelectedIcon,
  HomeIcon,
  HomeSelectedIcon,
  MessageIcon,
  MessageSelectedIcon,
  MoreIcon,
  MoreSelectedIcon,
  NotificationsIcon,
  NotificationsSelectedIcon,
  ReelsIcon,
  ReelsSelectedIcon,
  SearchIcon,
  SearchSelectedIcon,
} from "../iconos/iconos_left_sidebar"
import "./sidebar.css"

function SideBar() {
  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [explore, setExplore] = useState(false)
  const [reels, setReels] = useState(false)
  const [message, setMessage] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [create, setCreate] = useState(false)
  const [more, setMore] = useState(false)
  const [current, setCurrent] = useState({
    marked: false,
    name: "",
    value: "",
    function: "",
  })

  function handleSelected(value) {
    switch (value) {
      case "home":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setHome(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setHome,
            })
            break
          }
          setHome(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setHome(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setHome,
        })
        break
      case "search":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setSearch(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setSearch,
            })
            break
          }
          setSearch(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setSearch(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setSearch,
        })
        break
      case "explore":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setExplore(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setExplore,
            })
            break
          }
          setExplore(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setExplore(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setExplore,
        })
        break
      case "reels":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setReels(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setReels,
            })
            break
          }
          setReels(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setReels(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setReels,
        })
        break
      case "message":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setMessage(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setMessage,
            })
            break
          }
          setMessage(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setMessage(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setMessage,
        })
        break
      case "notifications":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setNotifications(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setNotifications,
            })
            break
          }
          setNotifications(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setNotifications(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setNotifications,
        })
        break
      case "create":
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setCreate(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setCreate,
            })
            break
          }
          setCreate(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setCreate(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setCreate,
        })
        break
      case "more": 
        if (current.marked) {
          if (current.name !== value) {
            current.function(!current.value)
            setMore(true)
            setCurrent({
              marked: true,
              name: value,
              value: true,
              function: setMore,
            })
            break
          }
          setMore(false)
          setCurrent({ marked: false, name: "", value: "", function: "" })
          break
        }
        setMore(true)
        setCurrent({
          marked: true,
          name: value,
          value: true,
          function: setMore,
        })
        break
      default:
        console.log(value)
        console.log("what is wrong with this CODEEEEEEEEE!")
    }
  }

  return (
    <div className="flex flex-row relative h-100vh justify-between ">
      <div className=" border-r h-100vh">
        <div className="flex flex-col box-border w-full items-start h-100dvh px-12px pt-8px pb-20px ">
          <div className="w-full shrink-0 relative h-92px">
            <div className=" absolute box-border px-16px pb-16px pt-25px h-75px mb-24px w-full">
              <a
                className="inline bg-transparent box-border cursor-pointer outline-none"
                href="/home"
              >
                <div className="items-stretch box-border flex flex-col relative shrink-0 cursor-pointer mt-8px">
                  <img
                    className="block relative"
                    src={logo}
                    width={100}
                    height={33}
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full grow">
            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer text-inherit outline-none"
                href="/home"
              >
                <div
                  className="relative "
                  onClick={() => handleSelected("home")}
                >
                  <div className="inline-flex flex-row box-border p-12px my-4px items-center w-full text-inherit cursor-pointer  hover:bg-gray-100 rounded-lg">
                    {home ? (
                      <div class="h-24px w-24px box-border cursor-pointer">
                        <HomeSelectedIcon />
                      </div>
                    ) : (
                      <div className="h-24px w-24px box-border cursor-pointer">
                        <HomeIcon />
                      </div>
                    )}
                    <div className="pl-16px">
                      <div className=" w-full">Inicio</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="">
              <a
                className="inline bg-transparent box-border cursor-pointer "
                href="/search"
              >
                <div
                  className=" w-full cursor-pointer"
                  onClick={() => handleSelected("search")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className=" flex flex-col box-border items-stretch justify-start relative cursor-pointer ">
                      {search ? (
                        <div className="h-24px w-24px cursor-pointer">
                          <SearchIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <SearchSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px flex  h-24px w-fit box-border items-center">
                      <div className=" block w-full relative cursor-pointer">
                        Search
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer "
                href="/explore"
              >
                <div
                  className="w-full cursor-pointer"
                  onClick={() => handleSelected("explore")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className=" flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                      {explore ? (
                        <div className="h-24px w-24px  cursor-pointer">
                          <ExploreIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <ExploreSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px h-24px w-fit box-border items-center">
                      <div className="block relative w-full cursor-pointer">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer"
                href="/reels"
              >
                <div
                  className="w-full cursor-pointer"
                  onClick={() => handleSelected("reels")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className=" flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                      {reels ? (
                        <div className=" h-24px w-24px cursor-pointer">
                          <ReelsIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <ReelsSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px h-24px w-fit box-border items-center">
                      <div className="block relative w-full cursor-pointer">
                        Reels
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer"
                href="/inbox"
              >
                <div
                  className="w-full cursor-pointer"
                  onClick={() => handleSelected("message")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className="flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                      {message ? (
                        <div className=" h-24px w-24px cursor-pointer">
                          <MessageIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <MessageSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px h-24px w-fit box-border items-center">
                      <div className="block relative w-full cursor-pointer">
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer"
                href="/notifications"
              >
                <div
                  className="w-full cursor-pointer"
                  onClick={() => handleSelected("notifications")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className="flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                      {notifications ? (
                        <div className=" h-24px w-24px cursor-pointer">
                          <NotificationsIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <NotificationsSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px h-24px w-fit box-border items-center">
                      <div className="block relative w-full cursor-pointer">
                        Notifications
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer"
                href="/create/post"
              >
                <div
                  className="w-full relative cursor-pointer"
                  onClick={() => handleSelected("create")}
                >
                  <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                    <div className="flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                      {create ? (
                        <div className=" h-24px w-24px cursor-pointer">
                          <CreateIcon />
                        </div>
                      ) : (
                        <div className=" h-24px w-24px cursor-pointer">
                          <CreateSelectedIcon />
                        </div>
                      )}
                    </div>
                    <div className="pl-16px h-24px w-fit box-border items-center">
                      <div className="block relative w-full cursor-pointer">
                        Create
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="inline bg-transparent box-border cursor-pointer"
                href="/user/profile"
              >
                <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                  <div className=" block relative w-24px h-24px  box-border cursor-pointer">
                    <img
                      className="w-full h-full cursor-pointer rounded-full"
                      src={pfp}
                      alt="pfp"
                    />
                  </div>
                  <div className="pl-16px h-24px w-fit box-border items-center">
                    <div className="block relative w-full cursor-pointer">
                      Perfil
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full">
            <a
              className="inline bg-transparent box-border cursor-pointer"
              href="/more"
            >
              <div
                className="w-full relative cursor-pointer"
                onClick={() => handleSelected("more")}
              >
                <div className="h-56px w-full p-12px my-4px inline-flex flex-row items-center cursor-pointer  hover:bg-gray-100 rounded-lg">
                  <div className="flex flex-col box-border items-stretch justify-start relative cursor-pointer">
                    {more ? (
                      <div className=" h-24px w-24px cursor-pointer">
                        <MoreIcon />
                      </div>
                    ) : (
                      <div className=" h-24px w-24px cursor-pointer">
                        <MoreSelectedIcon />
                      </div>
                    )}
                  </div>
                  <div className="pl-16px h-24px w-fit box-border items-center">
                    <div className="block relative w-full cursor-pointer">More</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
