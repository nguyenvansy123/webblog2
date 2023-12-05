import React from 'react'
import image from "../../Images/file.png"

export const PostItem = () => {
    return (
        <div className="item">
            <div className="item-img">
                <img src="/static/media/file.7332f06434553abc8a57.png" width="100%" height="100%" alt="" />
            </div>
            <div className="item-content">
                <a href="#">Child Health</a>
                <p>
                    Describe your forum category. Engage your audience and entice them
                    to continue reading.
                </p>
                <div className="item-total">
                    <div className="item-box">
                        <div className="icon">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                version="1.1"
                                className="forum-icon-fill"
                            >
                                <title>subcategory-list-item.views</title>
                                <path
                                    d="M11.5,5 C17.293,5 20.813,11.041 20.918,11.298 L20.918,11.298 L21,11.5 L20.918,11.701 C20.813,11.959 17.293,18 11.5,18 C5.707,18 2.187,11.959 2.082,11.701 L2.082,11.701 L2,11.5 L2.082,11.298 C2.187,11.041 5.707,5 11.5,5 Z M11.5,6.036 C6.92,6.036 3.565,10.488 3.089,11.499 C3.567,12.51 6.932,16.964 11.5,16.964 C16.08,16.964 19.435,12.512 19.911,11.5 C19.433,10.49 16.068,6.036 11.5,6.036 Z M11.5,8.25 C13.2949254,8.25 14.75,9.70507456 14.75,11.5 C14.75,13.2949254 13.2949254,14.75 11.5,14.75 C9.70507456,14.75 8.25,13.2949254 8.25,11.5 C8.25,9.70507456 9.70507456,8.25 11.5,8.25 Z M11.5,9.25 C10.2573593,9.25 9.25,10.2573593 9.25,11.5 C9.25,12.7426407 10.2573593,13.75 11.5,13.75 C12.7426407,13.75 13.75,12.7426407 13.75,11.5 C13.75,10.2573593 12.7426407,9.25 11.5,9.25 Z"
                                    id="Color"
                                />
                            </svg>
                        </div>
                        <span>0</span>
                    </div>
                    <div className="item-box">
                        <div className="icon">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                stroke="none"
                                className="forum-icon-fill"
                            >
                                <title>subcategory-list-item.posts</title>
                                <path
                                    fillRule="evenodd"
                                    d="M6 5h12c1.104 0 2 .896 2 2v8c0 1.104-.896 2-2 2h-4.36l-4.884 2.93c-.079.047-.168.07-.256.07-.086 0-.17-.021-.247-.065C8.097 19.846 8 19.68 8 19.5V17H6c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2zm13 10V7c0-.553-.447-1-1-1H6c-.553 0-1 .447-1 1v8c0 .553.447 1 1 1h3v2.621L13.36 16H18c.553 0 1-.447 1-1z"
                                ></path>
                            </svg>
                        </div>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
