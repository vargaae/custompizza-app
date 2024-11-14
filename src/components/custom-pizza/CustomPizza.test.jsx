import { render, screen, fireEvent } from "@testing-library/react";
import CustomPizza from "./CustomPizza";

describe("CustomPizza Component", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("renders CustomPizza component", () => {
        render(<CustomPizza />);
        expect(screen.getByText("🍕 Customize Your Pizza")).toBeInTheDocument();
    });

    test("selecting toppings updates the toppings state", () => {
        render(<CustomPizza />);
        const cheeseTopping = screen.getByLabelText("Cheese");
        fireEvent.click(cheeseTopping);
        expect(cheeseTopping).toBeChecked();
    });

    test("placing an order adds it to the orders list", () => {
        render(<CustomPizza />);
        const placeOrderButton = screen.getByText("Place Order");
        fireEvent.click(placeOrderButton);
        expect(screen.getByText("Medium pizza with none - $7.99")).toBeInTheDocument();
    });

    test("deleting an order removes it from the orders list", () => {
        render(<CustomPizza />);
        const placeOrderButton = screen.getByText("Place Order");
        fireEvent.click(placeOrderButton);
        const deleteButton = screen.getByText("x");
        fireEvent.click(deleteButton);
        expect(screen.queryByText("Medium pizza with none - $7.99")).not.toBeInTheDocument();
    });

    test("clearing all orders removes all orders from the list", () => {
        render(<CustomPizza />);
        const placeOrderButton = screen.getByText("Place Order");
        fireEvent.click(placeOrderButton);
        const clearAllButton = screen.getByText("Clear All Orders");
        fireEvent.click(clearAllButton);
        expect(screen.getByText("No orders yet.")).toBeInTheDocument();
    });
});