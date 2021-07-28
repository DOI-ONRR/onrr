import { gql } from '@apollo/client'

export const CORE_TAB_BLOCK_FIELDS = gql`
  fragment CoreTabBlockFields on pages {
    __typename
    ... on tab_blocks {
      id
      block_label
      tab_block {
        item {
          ... on tab_blocks_contents {
            tab_label
            tab_blocks {
              item {
                __typename
                ... on section_heading_blocks {
                  section_heading
                  section_heading_type
                }
                ... on content_blocks {
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`