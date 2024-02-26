import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const ChangeUpMethod = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'success')
    }

    const ClearTest = () => {
        setText('');
    }

    const reverse = () => {
        let strArr = text.split(" ");
        strArr = strArr.reverse();
        setText(strArr.join(" "));
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const ChangeLoMethod = () => {
        setText(text.toLowerCase());
    }

    const handelonChange = (event) => {
        setText(event.target.value)
    }

    const handelCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handelExtraSpaces = () => {
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "));
    }
    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark': 'light'}`}>
                <br/>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea name="form-control" style={{backgroundColor: props.mode==='dark'?'gray': 'white', color: props.mode ==='light'?'black': 'white'}} value={text} onChange={handelonChange} id="myBox" cols="120" rows="8"></textarea>
                </div>
                <br />
                <button className={`btn btn-${props.mode} mx-2`} onClick={ChangeUpMethod}>Convert to Uppercase</button>

                <button className={`btn btn-${props.mode} mx-2`} onClick={ChangeLoMethod}>Convert to Lowercase</button>

                <button className={`btn btn-${props.mode} mx-2`} onClick={ClearTest}>Clear Test</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={speak}>Speak</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={reverse}>Reverse</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handelCopy}>Text Copy</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handelExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className={`container text-${props.mode==='light'?'dark': 'light'}`}>
                <h3 className='my-3'>
                    You text summary
                </h3>
                <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters
                <br />
                <p>
                    {0.008 * text.split(" ").length} minutes read
                </p>
                <h3>
                    Preview
                </h3>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
