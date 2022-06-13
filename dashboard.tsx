export const Dashboard = () => {
  const router = useRouter();
  const { userName } = useContext(UserContext);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [breweries, setBreweries] = useState<Breweries[]>();
  const [numberOfCards, setNumberOfCards] = useState<number>(5);
  const [childNumber, setChildNumber] = useState<number>(-1);
  const [errorHandling, setErrorHandling] = useState<string>();
  const [deletedCards, setDeletedCards] = useState<number>(0);
  const { data, error } = useBreweries();

  let cardId = 1;

  useEffect(() => {
    setBreweries(data);
    setTotalCards(data?.length + 1);
  }, [data]);

  useEffect(() => {
    setNumberOfCards(numberOfCards + 1);
    setDeletedCards(deletedCards + 1);
  }, [childNumber]);

  useEffect(() => {
    if (userName === "" || error) {
      setErrorHandling("error");
    }
    if (errorHandling === "error") {
      router.push("/error");
    }
  }, [errorHandling, userName, error]);

  return (
    <PageContainer>
      <Header />
      <CardContainer id="cardContainer">
        {breweries && error ? (
          breweries
            .slice(0, numberOfCards)
            .map((data: Breweries) => (
              <Card
                key={cardId}
                id={cardId}
                title={data.name}
                address={data.street}
                location={data.city + ", " + data.state + " - " + data.country}
                brewery={data.brewery_type}
                postalCode={data.postal_code}
                telephone={data.phone}
                passCardNumber={setChildNumber}
                {...cardId++}
              />
            ))
        ) : (
          <LoadingState />
        )}
      </CardContainer>
      {totalCards === deletedCards && <EmptyState />}
    </PageContainer>
  );
};
