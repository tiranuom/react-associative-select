import React, {PropsWithChildren, ReactChild, useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter'
import {Collapse} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";

export interface ExampleWrapperProps {
  title: string
  description: string | ReactChild
  code: string
}

export function ExampleWrapper({title, description, code, children}: PropsWithChildren<ExampleWrapperProps>) {

  const [open, setOpen] = useState(false);

  return <div className={"mt-5"}>
    <div className={"row d-flex justify-content-between"}>
      <h5 className={"col-10"}>{title}</h5>
      <a className={'btn btn-light col-1'} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faCode}/>
      </a>
    </div>
    <p>{description}</p>
    <Collapse in={open}>
      <div>
        <SyntaxHighlighter language={'typescript'} id={'code'}>
          {code}
        </SyntaxHighlighter>
      </div>
    </Collapse>
    {children}
  </div>
}
