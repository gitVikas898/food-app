import "@testing-library/jest-dom"
import { Header } from "../Header.jsx";
import { screen, render, fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"

import { BrowserRouter } from "react-router-dom";


describe("Testing header",()=>{

    it("Header loaded with login button",()=>{

        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )
    //assertion

    const testLogin = screen.getByRole("button",{name : "Login"});

    expect(testLogin).toBeInTheDocument();

    });


    it("Testing the cart length on load ",()=>{
        
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header></Header>
                </Provider>
            </BrowserRouter>
        )
        screen.debug(); 
        const testCartItems = screen.getByText("Cart:(0)");

        expect(testCartItems).toBeInTheDocument();
    })

})

