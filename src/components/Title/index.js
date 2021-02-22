import Head from "next/head";

export const Title = ({ text }) => (
  <>
    <Head>
      <title>{ text }</title>
    </Head>
  </>
)
