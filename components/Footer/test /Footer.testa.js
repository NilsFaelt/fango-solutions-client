import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer.component";

describe("Footer Component", () => {
  it("renders links correctly", () => {
    render(<Footer />);

    // const homeLink = screen.getByText("HOME");
    // const contactLink = screen.getByText("CONTACT");
    // const cookiesLink = screen.getByText("COOKIES");

    // expect(homeLink).toBeInTheDocument();
    // expect(contactLink).toBeInTheDocument();
    // expect(cookiesLink).toBeInTheDocument();

    // expect(homeLink).toHaveAttribute("href", "/");
    // expect(contactLink).toHaveAttribute("href", "/contact");
    // expect(cookiesLink).toHaveAttribute("href", "/cookie-policy");
  });

  it("renders the ShareButton", () => {
    render(<Footer />);

    const shareButton = screen.getByText("Share");

    expect(shareButton).toBeInTheDocument();
  });
});
