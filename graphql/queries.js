import { gql } from '@apollo/client';

const GET_HOMEPAGE = gql`
  query {
    homepage {
      data {
        attributes {
          Hero {
            Heading
            Subheading
          }
        }
      }
    }
  }
`;

export { GET_HOMEPAGE };
