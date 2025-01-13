import "@testing-library/jest-dom"
import { screen, render, fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"

import { BrowserRouter } from "react-router-dom";
import { ResCard } from "../ResCard.jsx";
import mockData from "./mocks/mockData.json"


it("Should render Restaurant Cards",()=>{
    render(<ResCard resData={mockData}></ResCard>)
    screen.debug(); 
    const name = screen.getByText("Gopal Dosa");
    expect(name).toBeInTheDocument()
})