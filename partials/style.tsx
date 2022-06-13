import { toRem } from "../../../helpers/toRem";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #f2ec54;

  display: flex;
  flex-direction: row;

  align-items: center;
  padding: 1.25rem;
  padding-right: 2.5rem;
`;

export const HeaderText = styled.text`
  font-size: ${toRem(30)}rem;

  :last-of-type {
    margin-left: auto;
    text-align: justify;
  }

  @media (max-width: 800px) {
    font-size: ${toRem(20)}rem;
  }

  @media (max-width: 500px) {
    font-size: ${toRem(15)}rem;
  }

  @media (max-width: 400px) {
    font-size: ${toRem(15)}rem;
  }
`;

export const HeaderLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  cursor: pointer;
  padding-right: 10%;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 30%;

  background: #ffffff;
  border: ${toRem(1)}rem solid #000000;
  box-sizing: border-box;
  border-radius: 0.25rem;

  min-width: ${toRem(350)}rem;

  padding-left: ${toRem(23)}rem;
  padding-bottom: ${toRem(35)}rem;

  @media (max-width: 600px) {
    flex: 1 0 100%;
    width: 100%;
  }
`;

export const TrashCan = styled.div`
  height: ${toRem(16)}rem;
  margin-left: auto;
  align-items: flex-end;
  padding-top: ${toRem(14)}rem;
  padding-right: ${toRem(15)}rem;

  :hover {
    cursor: pointer;
  }
`;

export const CardTitle = styled.text`
  font-size: ${toRem(20)}rem;
  color: #27272a;
  font-weight: 700;
  padding-bottom: ${toRem(22)}rem;

  @media (max-width: 400px) {
    font-size: ${toRem(15)}rem;
  }
`;

export const CardText = styled.text`
  font-weight: 300;
  font-size: 1rem;
  color: #3f3f46;
`;

export const TagRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-top: 1rem;
`;

export const Tag = styled.div.attrs((props: { cursor?: string }) => props)`
  display: flex;
  background: #f2ec54;
  border-radius: 99px;
  gap: ${toRem(12)}rem;
  min-width: ${toRem(130)}rem;
  padding: ${toRem(8)}rem ${toRem(12)}rem;

  :hover {
    cursor: ${(props) => props.cursor};
  }
`;

export const AddMore = styled.input`
  width: ${toRem(83)}rem;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(50)}rem;

  @media (max-width: 1280px) {
    gap: ${toRem(20)}rem;
  }

  @media (max-width: 500px) {
    gap: ${toRem(10)}rem;
  }
`;

export const EmptyText = styled.text`
  a {
    color: red;
  }

  font-size: ${toRem(30)}rem;

  @media (max-width: 1280px) {
    font-size: ${toRem(20)}rem;
  }

  @media (max-width: 500px) {
    font-size: ${toRem(15)}rem;
  }

  @media (max-width: 350px) {
    font-size: ${toRem(10)}rem;
  }
`;

export const EmptyImageContainer = styled.div`
  height: ${toRem(120)}rem;
  width: ${toRem(120)}rem;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffef0;
`;
