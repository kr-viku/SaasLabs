import { render, screen } from "@testing-library/react";
import { Table } from "..";

const mockData = [
  {
    "s.no": 0,
    "percentage.funded": 186,
    "amt.pledged": 15823,
    blurb:
      "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
    by: "Museum of Science Fiction",
    country: "US",
    currency: "usd",
    "end.time": "2016-11-01T23:59:00-04:00",
    location: "Washington, DC",
    "num.backers": "219382",
    state: "DC",
    title: "Catalysts, Explorers & Secret Keepers: Women of SF",
    type: "Town",
    url: "/projects/1608905146/",
  },
  {
    "s.no": 1,
    "percentage.funded": 80,
    "amt.pledged": 12000,
    blurb: "Another project blurb.",
    by: "Another Creator",
    country: "US",
    currency: "usd",
    "end.time": "2024-12-31T23:59:00-04:00",
    location: "New York, NY",
    "num.backers": "105000",
    state: "NY",
    title: "Another Amazing Project",
    type: "City",
    url: "/projects/1234567890/",
  },
];

test("renders table with correct data", () => {
  render(<Table projects={mockData} />);

  expect(screen.getByText("S.No.")).toBeInTheDocument();
  expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
  expect(screen.getByText("Amount Pledged")).toBeInTheDocument();

  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("80")).toBeInTheDocument();
  expect(screen.getByText("12000")).toBeInTheDocument();
});
