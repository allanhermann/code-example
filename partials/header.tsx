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
