import gql from 'graphql-tag'
// import {
//   CORE_TAB_BLOCK_FIELDS
// } from './fragments'

// Main menu query
export const MENU_QUERY = gql`query {
  menu_items {
    id
    menu_label
    custom_url
    menu
    link_to_page {
      id
      slug
    }
    parent {
      id
      custom_url
      link_to_page {
        id
        slug
      }
    }
  }
}`

// Announcements query
export const ANNOUNCEMENTS_QUERY = gql`query {
  announcements {
    id
    title 
    content
  }
}`

// Pages query 
export const PAGES_QUERY = gql`
query {
  pages {
    id
    slug
    title
  }
}`

// Page query
export const PAGES_BY_ID_QUERY = gql`
query PagesById($ID: ID!) {
  pages_by_id (id: $ID) {
    id
    title 
    content 
    slug
    hero_image {
      id
    }
    page_blocks {
    	item {
        __typename
        ... on section_heading_blocks {
          section_heading
          section_heading_type
        }
        ... on content_blocks {
          content
        }
        ... on card_blocks {
          card_title
          card_subtitle
          card_content_block {
            item {
              __typename
              ... on content_blocks {
                content
              }
            }
          }
        }
        ... on tab_blocks {
          __typename
          id
          block_label
          tab_block {
            item {
              __typename
              ... on tab_blocks_contents {
                tab_label
                tab_blocks {
                  item {
                    ... on section_heading_blocks {
                      section_heading
                      section_heading_type
                    }
                    ... on content_blocks {
                      content
                    }
                    ... on tab_blocks {
                      tab_block {
                        item {
                          ... on tab_blocks_contents {
                            tab_label
                            tab_blocks {
                              item {
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
                }
              }
            }
          }
        }
      }
    }
  }
}`

// Files query
export const FILES_QUERY = gql`
  query {
    files {
      id
      storage
      filename_disk
      title
      filesize
      location
      folder {
        id 
        name
      }
    }
    folders {
      id
      name
    }
  }
`

// Total revenue queries
export const TOTAL_REVENUE_QUERY = gql`
  query {
    revenue_fiscal_years: period(
      distinct_on: fiscal_year, 
      where: {revenues: {revenue: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, 
      order_by: {fiscal_year: asc}) {
        fiscal_year
    }

    disbursement_fiscal_years: period(
      distinct_on: fiscal_year, 
      where: {disbursements: {disbursement: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, 
      order_by: {fiscal_year: asc}) {
        fiscal_year
    }
    total_yearly_fiscal_revenue(where: {year: {_eq: 2020}}) {
      sum
    }

    total_yearly_fiscal_disbursement(where: {year: {_eq: 2020}}) {
      sum
    }
    disbursement_gomesa: disbursement_source_summary(
      where: {fiscal_year: {_eq: "2020"}, source: {_eq: "GOMESA offshore"}, state_or_area: {_eq: "NF"}}, 
      order_by: {fiscal_year: asc, total: desc}
      ) {
      source
      sum: total
    }
  }
`

// Contacts query
export const CONTACTS_QUERY = gql`
  query {
    contacts {
      id
      primary_contact
      primary_email
      primary_phone
    }
  }
`

// Sample pages by id blocks query
export const SAMPLE = gql`
  query {
    pages_by_id(id: 55) {
      id
      slug
      title
      page_blocks {
        id
        item {
          __typename
          ... on headings {
            section_heading
            heading_type
          }
          ... on text_blocks {
            content
          }
          ... on tab_blocks {
            title
            tab_section {
              id
              item {
                ... on tab_block_section {
                  tab_label
                  tab_content
                }
              }
            }
          }
        }
      }
    }
}`
