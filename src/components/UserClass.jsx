import React from "react";
import { useState } from "react";
import html from "../utils/img/html.png"
import css from "../utils/img/css.png"
import js from "../utils/img/js.png"
import react from "../utils/img/react.png"
import redux from "../utils/img/redux.png"
import git from "../utils/img/git.png"
export class UserClass extends React.Component {

    constructor(props){
        super(props)

       this.state = {
            userInfo:{
                name:"Dummy name",
                bio:"Dummy bio"
            }
       }
    }   

   async componentDidMount(){
    console.log("Component Did Mount")

     const userData = await fetch("https://api.github.com/users/gitVikas898");

     const response = await userData.json();

     this.setState({
        userInfo:response,
     })
   }

    render(){

        const {name,bio,twitter_username,avatar_url} = this.state.userInfo;
        return(
            <div className=" p-3 flex flex-col gap-3 items-center  bg-orange-400 text-gray-700 ">

                  <div className="shadow-lg  p-4 flex flex-col gap-3 items-center justify-between rounded-md max-w-sm bg-white">

                  <div className="border border-green-500 border-solid flex max-w-40 rounded-full">
                    <img src={avatar_url} alt="" className="w-full rounded-full" />
                  </div>
                  <h2 className="text-2xl font-semibold">{name}</h2>
                  <p>{bio}</p>
                  <p>Tech Stack</p>
                      <div id="tech-stack" className="flex gap-4" >
                        <img src={html} alt=""  className="w-8 hover:scale-105 transition-transform ease-in duration-300" title="HTML"/>
                        <img src={css} alt=""className="w-8 hover:scale-105 transition-transform ease-in duration-300" title="CSS" />
                        <img src={js} alt="" className="w-8 hover:scale-105 transition-transform ease-in duration-300" title="JavaScript"/>
                        <img src={react} alt="" className="w-8 hover:scale-105 transition-transform ease-in duration-300" title="React.JS"/>
                        <img src={redux} alt="" className="w-8 hover:scale-105 transition-transform ease-in duration-300" title="Redux"/>
                        <img src={git} alt="" className="w-8 hover:scale-105 transition-transform ease-in duration-300"title="Git" />
                      </div>

                  </div>
                 
             </div>
        )
    }
}