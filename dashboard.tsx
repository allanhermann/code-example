import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Card } from "./partials/card";
import { CardContainer, PageContainer } from "./style";
import { useRouter } from "next/router";
import { EmptyState } from "./partials/empty";
import { Header } from "./partials/header";
import { Breweries } from "./types/breweries";
import { useBreweries } from "../../hooks/useBreweries";
import { LoadingState } from "./partials/loading";

const Dashboard = () => {
  const router = useRouter();

  const { userName } = useContext(UserContext);

  let cardId = 1;

  const [totalCards, setTotalCards] = useState<number>(0);
  const [breweries, setBreweries] = useState<Breweries[]>();
  const [numberOfCards, setNumberOfCards] = useState<number>(5);
  const [childNumber, setChildNumber] = useState<number>(-1);
  const [errorHandling, setErrorHandling] = useState<string>();
  const [deletedCards, setDeletedCards] = useState<number>(0);

  const { data, error } = useBreweries();

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

export default Dashboard;
