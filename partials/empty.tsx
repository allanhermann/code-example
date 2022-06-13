export const EmptyState = () => {
  return (
    <EmptyContainer id="empty">
      <EmptyText>It seems like you run through all the Breweries!</EmptyText>
      <EmptyText>
        {<Link href="/login">Click here</Link>} to go back to the login page
      </EmptyText>
      <EmptyImageContainer>
        <Image src={Bee} alt="Bee" />
      </EmptyImageContainer>
    </EmptyContainer>
  );
};
