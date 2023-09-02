import Head from "next/head";
import { CreatorsList } from "@/components";
import { Creator, getActiveCreators } from "@/services";
import styled from "styled-components";
import { useI18n } from "@/i18n";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.DarkText};
`;

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

/* Based on the requirement, this constant can be a global constant, configured, 
   fetched from environment variables, etc.
 */
const NUMBER_OF_ACTIVE_CREATORS = 3;

type Props = {
  activeCreators: Creator[];
};

const Page: React.FC<Props> = ({ activeCreators }) => {
  const $t = useI18n();

  return (
    <>
      <Head>
        <title>{$t("page.active-creators.title")}</title>
        <meta
          name="description"
          content={$t("page.active-creators.description")}
        />
      </Head>

      <main>
        <Container>
          <Title>{$t("active-creators")}</Title>
          <CreatorsList creators={activeCreators} />
        </Container>
      </main>
    </>
  );
};

export default Page;

export async function getServerSideProps() {
  const activeCreators = await getActiveCreators(NUMBER_OF_ACTIVE_CREATORS);
  return {
    props: {
      activeCreators: activeCreators.map(({ id, email }) => ({ id, email })), // Pick just required and serializable fields
    },
  };
}
