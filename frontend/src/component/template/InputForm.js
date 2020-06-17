import React from 'react'
import { Form } from "react-bootstrap"
// import { FilePond, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css'
// // Import the plugin code
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
// import FilePondPluginImageResize from 'filepond-plugin-image-resize';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// // Import the plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// registerPlugin(FilePondPluginFileEncode, FilePondPluginImageResize, FilePondPluginImagePreview, FilePondPluginImageCrop);

export default function InputForm({ label, attribute, type, options, Validate, userData, fileUpload }) {

    let no = 0
    const style = {
        label: {
            color: 'blue',
            fontSize: 28,
            fontWeight: 'bold'
        },
        input: {
            borderColor: 'green',
            borderWidth: 5,
        }
    }
    // select option if user data is there
    let selectUser = (userData) && userData.map(el => {
        no++
        return <option key={no} value={el.name}> {el.name}
        </option>
    })
    // other select options
    let select = (options) && options.map((el, index) => {
        return <option key={index} value={el}> {el}</option>
    })

    const renderHtml = () => {
        if (type === 'select') {
            return <Form.Control
                as={type} name={attribute}
                onChange={Validate}
                style={style.input}>
                <option>Select</option>
                {
                    (attribute === 'user') ? selectUser : select
                }

            </Form.Control>
        } else if (type === 'image') {

            return <Form.Group>
                <Form.File id={attribute} 
                name ={attribute}
                onChange ={fileUpload} />
              
            </Form.Group>
            

                // return <FilePond allowMultiple={true}
                //     maxFiles={3}
                //     onChange={fileUpload}
                //     onupdatefiles={fileUpload}
                // />
        } else {
            return <Form.Control
                style={style.input}
                onChange={Validate}
                type={type}
                name={attribute}
                placeholder={label}
                autoComplete="on"
            />
        }
    }

    return (
        <Form.Group>
            <Form.Label style={style.label}><b>{label} </b></Form.Label>
            {renderHtml()}
        </Form.Group>
    )

}
