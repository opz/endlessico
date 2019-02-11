import React from 'react';
import { Container } from 'semantic-ui-react';

export default props => {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  );
};
