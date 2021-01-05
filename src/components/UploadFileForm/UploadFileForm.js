import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core';

const GENERATE_PRESIGN_URL = process.env.REACT_APP_GENERATE_PRESIGN_URL
const uploadFile = (file, description) => {
    fetch(`${GENERATE_PRESIGN_URL}?filename=${file.name}`)
        .then(response => response.json())
        .then(data => {
            uploadFileUsingPreSignedLink(data.imageUrl, file)
            uploadJSONUsingPreSignedLink(
                data.jsonUrl,
                JSON.stringify({ description: description }),
                data.jsonFileName
            )
        })
        .catch(err => console.log(err.message))
}

const uploadFileUsingPreSignedLink = (url, file) => {
    console.log(`Uploading file ${Object.keys(file)}`)
    fetch(url, {
        method: 'PUT',
        headers: {
            "content-type": "application/octet-stream",
        },
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

const UploadFileForm = (props) => {
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        uploadFile(files[0], description)
    }

    return (
        <Container align='center'>
            <form onSubmit={handleSubmit} noValidate>
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
                            <td colSpan={2}>
                                <Button type='submit' variant='contained' fullWidth color='primary' size='small'>
                                    Enviar
                            </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </Container>
    );
}

export default UploadFileForm;