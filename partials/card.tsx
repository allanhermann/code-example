import {
  AddMore,
  CardBody,
  CardText,
  CardTitle,
  Tag,
  TagRow,
  TrashCan,
} from "./style";
import Image from "next/image";
import Trash from "../../../assets/svg/trash.svg";
import Chart from "../../../assets/svg/chart.svg";
import Phone from "../../../assets/svg/phone.svg";
import Location from "../../../assets/svg/location.svg";
import PlusSymbol from "../../../assets/svg/plus-symbol.svg";
import { useState } from "react";

type CardProps = {
  id: number;
  title?: string;
  address?: string;
  location?: string;
  brewery?: string;
  postalCode?: string;
  telephone?: string;
  passCardNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Card = ({
  id,
  title,
  address,
  location,
  brewery,
  postalCode,
  telephone,
  passCardNumber,
}: CardProps) => {
  const [textAddMore, setTextAddMore] = useState<string>("");
  const [clickAddMore, setClickAddMore] = useState<boolean>(false);
  const [discardedComponent, setDiscardedComponent] = useState<boolean>(false);

  const noLocationString = ",  - ";

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;
    setTextAddMore(textValue);
    setClickAddMore(false);
  };

  const handleDeleteCard = () => {
    setDiscardedComponent(true);
    passCardNumber(id);
  };

  return (
    <>
      {!discardedComponent && (
        <CardBody id="cardBody">
          <TrashCan onClick={handleDeleteCard} id="trashCan">
            <Image src={Trash} alt="Delete" />
          </TrashCan>
          <CardTitle>{title ?? "No title"}</CardTitle>
          <CardText>{address ?? "No address"}</CardText>
          <CardText>
            {location !== noLocationString ? location : "No city"}
          </CardText>
          <TagRow>
            {brewery && (
              <Tag>
                <Image src={Chart} alt="Type of Brewery" />
                <CardText>{brewery}</CardText>
              </Tag>
            )}
            {postalCode && (
              <Tag>
                <Image src={Location} alt="Location" />
                <CardText>{postalCode}</CardText>
              </Tag>
            )}
          </TagRow>
          <TagRow>
            {telephone && (
              <Tag>
                <Image src={Phone} alt="Phone" />
                <CardText>{telephone}</CardText>
              </Tag>
            )}
            <Tag
              cursor={
                textAddMore == "" && !clickAddMore ? "pointer" : "default"
              }
              onClick={() => setClickAddMore(true)}
            >
              <Image src={PlusSymbol} alt="Add More" />
              {textAddMore == "" && clickAddMore ? (
                <AddMore
                  type="text"
                  placeholder="add more"
                  onBlur={handleTextChange}
                  autoFocus
                />
              ) : (
                <CardText>{textAddMore ? textAddMore : "add more"}</CardText>
              )}
            </Tag>
          </TagRow>
        </CardBody>
      )}
    </>
  );
};
