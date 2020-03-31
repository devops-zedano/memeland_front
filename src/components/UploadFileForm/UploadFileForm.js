import React, { useState } from 'react'

const URL = 'https://txe0ugfgli.execute-api.us-east-1.amazonaws.com/dev/generate-presigned-url'
const uploadFile = (file, description) => {
    fetch(`${URL}?filename=${file.name}`)
        .then(response => response.json())
        .then(data => {
            uploadFileUsingPreSignedLink(data.imageUrl, file)
            uploadJSONUsingPreSignedLink(
                data.jsonUrl,
                JSON.stringify({ description: description }),
                file.name + '.json'
            )
        })
        .catch(err => console.log(err.message))
}

const uploadFileUsingPreSignedLink = (url, file) => {
    fetch(url, {
        method: 'PUT',
        body: file
    })
        .then(response => console.log(response))
        .catch(err => console.log(err.message))
}

const uploadJSONUsingPreSignedLink = (url, jsonData, filename) => {
    fetch(url, {
        method: 'PUT',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response)
            window.location.reload(false)
        })
        .catch(err => console.log(err.message))
}

export default (props) => {
    const URL = ''
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        uploadFile(files[0], description)
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <input
                                type="text"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>File to upload: </td>
                        <td>
                            <input type="file"
                                onChange={e => setFiles(e.target.files)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="submit" value="Submit" style={{ width: "100%" }} /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}