import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

test("navigates between pages", () => {
  const handlePageChange = jest.fn();

  render(
    <Pagination
      currentPage={1}
      totalItems={10}
      itemsPerPage={5}
      onPageChange={handlePageChange}
    />
  );

  const nextButton = screen.getByText("Next");
  fireEvent.click(nextButton);
  expect(handlePageChange).toHaveBeenCalledWith(2);

  const prevButton = screen.getByText("Previous");
  fireEvent.click(prevButton);
  expect(handlePageChange).toHaveBeenCalledWith(0); // Would be guarded in prod.
});
