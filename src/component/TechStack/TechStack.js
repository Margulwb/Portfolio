import React from 'react'
import './TechStack.scss'
import { InsertTechnology } from "./InsertTechnology";

export function TechStack(props) {
    const Frontend=[
        {id:1,name:'HTML',image:'FaHtml5'},
        {id:2,name:'CSS',image:'FaCss3Alt'},
        {id:4,name:'JS',image:'SiJavascript'},
        {id:3,name:'SASS',image:'FaSass'},
        {id:5,name:'REACT',image:'FaReact'},
        {id:7,name:'BOOTSTRAP',image:'FaBootstrap'},
        {id:6,name:'GIT',image:'SiGit'},
    ]
    const Devops=[
        {id:1,name:'AZURE',image:'FaMicrosoft'},
        {id:2,name:'JENKINS',image:'SiJenkins'},
        {id:3,name:'DOCKER',image:'FaDocker'},
        {id:4,name:'AZURE DEVOPS',image:'SiAzuredevops'},
        {id:5,name:'ANSIBLE',image:'FaAnsible'},
        {id:6,name:'KUBERNETES',image:'SiKubernetes'},
        {id:7,name:'GITHUB',image:'FaGithub'},
    ]

    return (
        <div className='row my-5 pt-1' id='tech-stack'>
            <div className="row mb-4">
                <h1 className="h1">{props.content.heading}</h1>
            </div>
            {props.content.SecoundHeading.map((category, index) => (
                <div className="row" key={index}>
                    <h2 className="profesion">{props.content.SecoundHeading[index]}</h2>
                    <InsertTechnology technologies={category === 'Frontend' ? Frontend : Devops} />
                </div>
            ))}
        </div>
    );
}
