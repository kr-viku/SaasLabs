import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "..";

describe("Pagination Component", () => {
  const handlePageChange = jest.fn();

  test("renders correct number of pagination buttons", () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={10}
        itemsPerPage={5}
        onPageChange={handlePageChange}
      />
    );

    // Check if 3 pagination buttons (15 / 5 = 3 pages) are rendered
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });

  test("calls setCurrentPage with correct value on button click", () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={10}
        itemsPerPage={5}
        onPageChange={handlePageChange}
      />
    );

    const secondPageButton = screen.getByText("2");
    fireEvent.click(secondPageButton);

    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test("disables current page button", () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={10}
        itemsPerPage={5}
        onPageChange={handlePageChange}
      />
    );

    const firstPageButton = screen.getByText("1");
    expect(firstPageButton).toBeDisabled();
  });
});
