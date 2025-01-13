import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import Grocery from "../Grocery"

test("Testing if Contact us page renders",()=>{

    render(<Grocery></Grocery>)

   const testHeading = screen.getByRole("heading");
    //assertion
   expect(testHeading).toBeInTheDocument()
})

test("Test if button is being loaded on the Page",()=>{

    render(<Grocery></Grocery>);

    const testButton = screen.getByRole("button");
    //assertion
    expect(testButton).toBeInTheDocument()
})

test("Test using getByText",()=>{

    render(<Grocery></Grocery>)

    const testGetByText = screen.getByText("Subscribe");

    expect(testGetByText).toBeInTheDocument();
});

test("Test using getByPlaceHolder",()=>{

    render(<Grocery></Grocery>)

    const testByPlaceholder = screen.getByPlaceholderText("Enter email");

    expect(testByPlaceholder).toBeInTheDocument()
})