import Link from "next/link";
import Image from "next/image";
import GoBack from "../../../assets/svg/go-back-arrow.svg";
import { HeaderContainer, HeaderLink, HeaderText } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

export const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Link href="/login" passHref>
        <HeaderLink id="goBack">
          <Image src={GoBack} alt="Go Back" />
          <HeaderText>Go back</HeaderText>
        </HeaderLink>
      </Link>
      <HeaderText id="userName">{userName}</HeaderText>
    </HeaderContainer>
  );
};
