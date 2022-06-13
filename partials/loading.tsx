import Image from "next/image";
import { LoadingContainer } from "./style";
import Loading from "../../../assets/svg/loading.svg";

export const LoadingState = () => {
  return (
    <LoadingContainer id="loading">
      <Image src={Loading} alt="Loading..." />
    </LoadingContainer>
  );
};
