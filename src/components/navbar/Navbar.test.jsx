import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { navigation } from "../../constants";
import { logo } from "../../assets";

describe("Navbar", () => {
    test("renders logo and navigates to home on click", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const logoElement = screen.getByAltText("logo of Andras Varga");
        expect(logoElement).toBeInTheDocument();
        fireEvent.click(logoElement);
        expect(window.location.pathname).toBe("/");
    });

    test("renders navigation links", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        navigation.forEach((item) => {
            const linkElement = screen.getByText(item.title);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute("href")).toBe(item.url);
        });
    });
});