import "@testing-library/jest-dom";
import { screen, render} from "@testing-library/react";
import { BodyComponent } from "../BodyComponent";
import MENU_DATA from "../__tests__/mocks/menuData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{

    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MENU_DATA);
        }
    })
}) 

test("Should Render Body",async()=>{
    await act(async()=>{

        render
        (<BrowserRouter>
            <BodyComponent></BodyComponent>
        </BrowserRouter>
        )
        screen.debug();
    })
})