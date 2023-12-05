import React, { useState } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./style.css"
import { Editor } from "../../components/Editor/Editor";

export const CreatePostPage = () => {



    return (
        <div className="post-editor">
            <h1 className="post-title" >Create Post</h1>

            <input className="editor-title-input" placeholder="Tile" />
            <textarea className="editor-title-description" placeholder="Description">
            </textarea>
            <div className="box-category">
                <span className="box-category-link-with-title">Select image title: </span>
                <input className="box-category-link-with-avatar" type="file" name="" id="" />
            </div>

            <Editor/>

            <div className="group-btn">
                <button id="Delete-btn" className="btn">
                    Delete
                </button>
                <button id="post-btn" className="btn post-btn">
                    Post
                </button>
            </div>


        </div>
    )
}
