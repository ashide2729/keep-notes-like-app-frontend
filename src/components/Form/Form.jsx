import React, { useState } from 'react'
import './_Form.scss'
import axios from 'axios';
// import TagsInput from 'react-tagsinput'

export default function Form(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    // const [tags, setTags] = useState([])

    // function handleChange(tags) {
    //     setTags(tags)
    // }

    function postNote(head, body) {
        const note = {
            title: head,
            description: body
        };

        axios.post(`http://localhost:9000/v1/notes`, { note })
            .then(res => {
                console.log(res);
                console.log(res.data);
                props.toggleForm();
            })
    }

    return (
        <div className="form-container">
            <div className="form-heading">
                Add a note
            </div>
            <div className="form-title-container">
                <label className="form-labels">Title</label>
                <input className="form-title-input" type="text" value={title} onChange={(e) => handleTitleChange(e)} placeholder="Enter a title..." required />
            </div>
            <div className="form-description-container">
                <label className="form-labels">Description (Optional)</label>
                <textarea className="form-description-input" rows="4" cols="50" value={description} onChange={(e) => handleDescriptionChange(e)} placeholder="Enter a description..."></textarea>
            </div>
            {/* <div className="form-title-container">
                <label className="form-labels">Tags</label>
                <TagsInput value={tags} onChange={() => handleChange} />
            </div> */}
            <div className="form-action-buttons">
                <button className="form-discard-button" onClick={props.toggleForm}>Discard</button>
                <button className="form-submit-button" disabled={true && title.length < 2} onClick={() => postNote(title, description)}>Submit</button>
            </div>
        </div>
    )
}
