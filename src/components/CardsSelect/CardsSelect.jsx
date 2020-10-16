import React, { Component } from "react";

class CardsSelect extends Component {
  render() {
    const { Card } = this.props;

    if (edge.node.data.Card) {
      edge.node.data.Card.forEach(Card => {
        cardsSet.add(Card);
      });
    }
    
    return (
      <div className="">
        
      </div>
    );
  }
}

export default CardsSelect;


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CardsSelectQuery {
    allAirtable(limit: 2000, filter: {data: {Status: {eq: "Publish"}}}, sort: {fields: data___Card, order: ASC}) {
      edges {
        node {
          data {
            Card
          }
        }
      }
    }
  }
`;

