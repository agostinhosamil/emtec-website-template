
import { TitleContainer } from "./styles";
import Head from "next/head";

export const Title = ({ text, render }) => (
  <>
    <Head>
      <title>{ text }</title>
    </Head>
    {(typeof render === typeof true && !render) || (
      <TitleContainer>{ text }</TitleContainer>
    )}
  </>
)
