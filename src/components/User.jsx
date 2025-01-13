import React from "react"
import twitterImage from "../utils/img/twitter.png"
import insta from '../utils/img/instagram.png'
import linked from '../utils/img/linkedin.png'
import github from '../utils/img/github.png'


export class User extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                name :"Vikas",
                bio  :"Bio",
            }
        }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/gitVikas898");

        const response = await data.json();

        this.setState({
            userInfo:response,
        })
    }

    render()
    {  
        const {name, bio ,avatar_url} = this.state.userInfo;
        return (
           <div className="bg-white rounded-lg p-6 flex flex-col gap-2 items-center justify-items-center w-1/2">
               
              
                <div className=" max-w-52 rounded-full">
                    <img src={avatar_url} className="rounded-full w-full"></img>
                </div>

                <div className="grid gap-3  p-6 ">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-slate-700">{bio}</p>
                </div>
                    
                    <div className=" flex flex-col gap-3 items-center justify-between w-full">
                        <div>
                            <h2 className="text-gray-600 text-2xl">Social Links</h2>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <a href=""> <img src={twitterImage} alt=""  className="w-12"/></a>
                            <a href="#"> <img src={insta} alt=""  className="w-12"/></a>
                            <a href="#"> <img src={linked} alt=""  className="w-12"/></a>
                            <a href="#"> <img src={github} alt=""  className="w-12"/></a>
                        </div>
                        
                    </div>
                </div>
          
        )
    }
}

