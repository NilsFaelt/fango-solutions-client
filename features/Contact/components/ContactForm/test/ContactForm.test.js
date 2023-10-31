import { render, screen } from "@testing-library/react";
import ContactForm from "../ContactForm.component";

// In your test setup or test file

const getRedirectResult = jest.fn(() => {
  return Promise.resolve({
    user: {
      displayName: "redirectResultTestDisplayName",
      email: "redirectTest@test.com",
      emailVerified: true,
    },
  });
});

// Replace this with your actual Firebase configuration

// Set up a Firebase app using your custom Firebase mock

test("ContactForm component renders correctly", () => {
  render(<ContactForm />);

  const mainText = screen.getByText("Hello!");
  const mailPopUpText = screen.getByText("NilsFaelt@Gmail.com");
  const mainTitle = screen.getByText("Best Regards");
  const underText = screen.getByText("Team Fango");

  expect(mainText).toBeInTheDocument();
  expect(mailPopUpText).toBeInTheDocument();
  expect(mainTitle).toBeInTheDocument();
  expect(underText).toBeInTheDocument();
});
