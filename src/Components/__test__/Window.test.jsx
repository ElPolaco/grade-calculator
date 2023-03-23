import React from 'React'
import {render,fireEvent} from "@testing-library/react"
import Window from '../Window'
describe("Window element",()=>{
    it("renders correctly",()=>{
       const {getByText}=render(<Window>Hello</Window>);
       const window=getByText("Hello");
       expect(window).toBeInTheDocument();
    });

});