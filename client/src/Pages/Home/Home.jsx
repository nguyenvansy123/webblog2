import React from 'react'
import "./home.css";
import { PostItem } from '../../components/PostItem/PostItem';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div id='container'>
      <div className="heading">
        <h1>Online Health Community</h1>
        <span>Taking Our Health in Our Hands</span>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="content-header-left">
            <span className="active">All Posts</span>
            <span>My Posts</span>
          </div>
          <div className="content-header-right">
            <div className="search-box">
              <input type="text" id="search" placeholder="Search" />
              <div className="search-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="100%"
                  height="100%"
                  data-hook="search-icon"
                >
                  <path
                    d="M6.6108,14.3887 C5.5718,13.3497 4.9998,11.9687 4.9998,10.4997 C4.9998,9.0317 5.5718,7.6507 6.6108,6.6117 C7.6498,5.5727 9.0308,4.9997 10.4998,4.9997 C11.9688,4.9997 13.3498,5.5727 14.3888,6.6117 C15.4278,7.6507 15.9998,9.0317 15.9998,10.4997 C15.9998,11.9687 15.4278,13.3497 14.3888,14.3887 C13.3498,15.4277 11.9688,15.9997 10.4998,15.9997 C9.0308,15.9997 7.6498,15.4277 6.6108,14.3887 L6.6108,14.3887 Z M20.0028,19.2957 L15.4328,14.7247 C16.4438,13.5477 16.9998,12.0687 16.9998,10.4997 C16.9998,8.7637 16.3238,7.1317 15.0958,5.9047 C13.8688,4.6767 12.2358,3.9997 10.4998,3.9997 C8.7638,3.9997 7.1318,4.6767 5.9038,5.9047 C4.6758,7.1317 3.9998,8.7637 3.9998,10.4997 C3.9998,12.2367 4.6758,13.8677 5.9038,15.0957 C7.1318,16.3237 8.7638,16.9997 10.4998,16.9997 C12.0688,16.9997 13.5478,16.4437 14.7258,15.4317 L19.2958,20.0027 L20.0028,19.2957 Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        {/* ----------------------------------- */}
        <div className="post-list-controls">
          <button id="create-btn"> <Link to="/createpost">Create New Post</Link></button>

          <div
            id="list-post-item"
            style={{ width: "100%", height: "auto" }}
            className=""
          >
            <div className="post-list-item">
              {/* ---------------------------------*/}
              {/* <span class="not-found">There are currently no posts</span> */}
              {/* ---------------------------------*/}
              <PostItem />
              <PostItem />
              <PostItem />
            </div>
            <div className="post-list-page">
              <ul className="pagination">
                <button className="btn" id="Prev">
                  Previous
                </button>
                <li>
                  <a to="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#" className="active">
                    3
                  </a>
                </li>
                {/* Add more pages as needed */}
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <button className="btn" id="next">
                  Next
                </button>
              </ul>
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
        {/* ----------------------------------- */}
        {/* <div id="post-content" class="grid">
          <div class="row">
              <div class="c-8">
                  
              </div>
              <div class="c-4"></div>
          </div>
      </div> */}
        {/* ----------------------------------- */}
      </div>

    </div>
  )
}
