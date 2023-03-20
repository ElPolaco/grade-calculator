import React from 'React'
import {render,fireEvent} from "@testing-library/react"
import PointsInput from '../PointsInput'

describe("PointsInput component",()=>{
    it("renders correctly",()=>{
        const {getByLabelText}=render(<PointsInput id='pt' placeholder='points'/>);
        const input = getByLabelText(/points/i);
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type","number");
    });
    it("updates the input value correctly",()=>{
        const fn=jest.fn();
        const {getByLabelText}=render(<PointsInput id='pt' value={60} onChange={fn} placeholder='points'/>);

        const inputElement = getByLabelText(/points/i);
        expect(inputElement).toHaveValue(60);
        fireEvent.change(inputElement, { target: { valueAsNumber: 75 } });
        expect(fn).toHaveBeenCalledTimes(1);
        expect(inputElement).toHaveValue(60);
    });
    it("limits the input value correctly", () => {
        const fn=jest.fn();
        const {getByLabelText}=render(<PointsInput id='pt' value={60} max={70} onChange={fn} placeholder='points'/>);

        const inputElement = getByLabelText(/points/i);
        expect(inputElement).toHaveValue(60);
        fireEvent.change(inputElement, { target: { value: "80" } })
        expect(inputElement).toHaveValue("70");

    });
});