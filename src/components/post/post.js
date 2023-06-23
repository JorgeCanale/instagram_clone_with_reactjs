import React, {useState} from "react";
import LittleKittens from "../../assets/kittens.jpg"
import profile from "../../assets/pfp.jfif"
import "./post.css"

function Post(){


    const [like, setLike] = useState(false);

    const [saved, setSaved] = useState(false)

    function handleLike(){
        setLike(!like)
    }


    function handleSaved(){
        setSaved(!saved)
    }

    return(
        <div className="post">
            <div className="top">
                <header className="hp">
                    <div className="img-container">
                        <img className="profile" src={profile}  alt="pfp"/>
                    </div>
                    <div className="hi">
                        <div className="hir">
                            <div className="hi1">
                                <a>kittensOnline</a>
                            </div>
                            <div className="hir22">
                                <div className="hir2">
                                    <div className="time-container">
                                        <span className="dot">•</span>
                                        <time>1 dia</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="more">
                    <button>
                        <span className="icon">
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon> 
                        </span>
                    </button>
                </div>
            </div>
            <img className="PostImage" src={LittleKittens} alt="lost content"/>
            <div className="bottom-part">
                <section className="middle">
                    <span className="like">
                        <button onClick={handleLike}>
                            {like ? 
                            <div>
                                <svg aria-label="Unlike" className="heartt" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24">
                                    <title>Unlike</title>
                                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                </svg>
                            </div>
                            :
                            <div className="like-icon">
                                <span className="container">
                                    <svg aria-label="Me gusta" className="heart" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <title>Me gusta</title>
                                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                    </svg>
                                </span>
                            </div>}
                        </button>
                    </span>
                    <span className="comment">
                        <button >
                            <div className="container">
                                <svg aria-label="Comentar" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Comentar</title>
                                    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                                </svg>                       
                            </div>
                        </button>
                    </span>
                    <span className="send">
                        <button>
                            <div className="container">
                                <svg aria-label="Compartir publicación" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Compartir publicación</title>
                                    <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                    <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                                </svg>
                            </div>
                        </button>
                 </span>
                    <span className="save">
                        <button onClick={handleSaved}>
                            {saved ? 
                            <div class="_abm0">
                                <svg aria-label="Remove" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Remove</title>
                                    <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                                </svg>
                            </div>
                            :
                            <div className="container">
                                <svg aria-label="Guardar" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Guardar</title>
                                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                                </svg>
                            </div>}
                        </button>
                    </span>
                </section>
                <section className="likes-counter">
                    <div>
                        <a>
                            <span>1330</span> Likes
                        </a>
                    </div>
                </section>
                <div className="comment-section">
                    <div>
                        <div >
                            <a className="disclaimer">
                                <span> kittensOnline_12 </span>
                                <span className="withe-space">-</span>
                                <span> 
                                    <h4> two little kittens 💖 </h4>
                                </span>
                            </a>
                        </div>
                        <div className="more-comments">
                            <a>
                                ver los <span>15</span> comentarios
                            </a>
                        </div>
                    </div>
                </div>
                <section className="bsc">
                    <div>
                        <form>
                            <div>
                                <textarea  className="new-comment"
                                aria-label="Añade un comentario..." 
                                placeholder="Añade un comentario..."
                                autoComplete="off" 
                                autoCorrect="off"></textarea>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Post