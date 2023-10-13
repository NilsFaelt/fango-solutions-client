import React from "react";
import { Container, TextWrapper, Title } from "./CookiePolicyView.style";
import { MainTitle } from "@/ui";
import { MainText } from "@/ui/display/MainText/MainText.component";

export const CookiePolicyView = () => {
  return (
    <Container>
      <MainTitle
        linkUrl='/'
        text='FANGO SOLUTIONS '
        underText='Cookie Policy'
      />
      <TextWrapper>
        <Title>
          Enhancing User Experience and Security with Cookies and Firebase
          Authentication
        </Title>
        <MainText>
          At FangoSolutions, we are dedicated to providing the best possible
          user experience for our visitors while ensuring their data security.
          To achieve this, we use cookies for authentication and employ Firebase
          Authentication, a trusted third-party library.
        </MainText>
        <Title>Cookies for Authentication:</Title>
        <MainText>
          Cookies are small text files stored in a users web browser. They play
          a crucial role in enhancing user experiences on the FangoSolutions
          website. Heres how we use cookies:
        </MainText>

        <MainText>
          User Authentication: When you visit our website, we may use cookies to
          authenticate and identify you. This helps ensure that you have access
          to your account and its features, maintaining a seamless and
          personalized experience.
        </MainText>
        <MainText>
          Remembering User Preferences: Cookies remember your preferences, such
          as language settings or theme choices. This eliminates the need to
          reset these preferences each time you visit our site, making your
          experience more convenient.
        </MainText>
        <MainText>
          Improving Website Performance: By using cookies to store data, we can
          optimize the loading speed of our web pages, contributing to a
          smoother and faster browsing experience.
        </MainText>
        <Title>Firebase Authentication:</Title>
        <MainText>
          Firebase Authentication is an authentication service provided by
          Google. It helps us implement secure and reliable user authentication
          for our website. While using Firebase Authentication, its essential to
          be aware of the librarys use of cookies:
        </MainText>
        <MainText>
          User Identity Verification: Firebase Authentication uses cookies to
          verify user identities securely. This is a crucial step in ensuring
          that the right individuals have access to their accounts and data.
        </MainText>
        <MainText>
          Enhancing Security: The library helps us protect against fraudulent
          activities and unauthorized access by employing cookies for secure
          authentication.
        </MainText>
        <MainText>
          Simplified Authentication: Firebase Authentication streamlines the
          authentication process, providing a user-friendly and efficient login
          and signup experience.
        </MainText>
        <Title>Your Privacy Matters::</Title>
        <MainText>
          We understand the importance of privacy, and we want to assure you
          that we respect your choices. Cookies are used solely for enhancing
          your experience and maintaining the security of your data. You have
          the option to manage and delete cookies, and our privacy policy
          outlines our commitment to transparency and responsible data handling.
          At FangoSolutions, our mission is to provide a user-centric platform
          that prioritizes your needs. By using cookies and Firebase
          Authentication, we aim to create a secure and personalized environment
          for you to enjoy. Your trust is paramount to us, and we are
          continually working to ensure that your online interactions with
          FangoSolutions are safe, seamless, and tailored to your preferences.
          Thank you for being part of the FangoSolutions community. Sincerely,
          Fango Solutions
        </MainText>
      </TextWrapper>
    </Container>
  );
};
