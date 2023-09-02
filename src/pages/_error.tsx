import { useI18n } from "@/i18n";
import { NextPageContext } from "next";
import styled from "styled-components";

type Props = {
  statusCode?: number;
};

const Container = styled.div`
  padding: 1rem;
`;

function Error({ statusCode }: Props) {
  const $t = useI18n();

  function errorDescription() {
    switch (statusCode) {
      case 404:
        return $t("general-error.404.description");
      default:
        return $t("general-error.description");
    }
  }

  return (
    <Container>
      <h1>{$t("general-error.title")}</h1>
      <p>{errorDescription()}</p>
    </Container>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
