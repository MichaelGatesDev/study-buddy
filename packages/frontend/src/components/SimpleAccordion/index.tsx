import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export interface AccordionCard {
  title?: JSX.Element;
  content?: JSX.Element;
}

interface AccordionProps {
  cards: AccordionCard[];
}

const SimpleAccordion = (props: AccordionProps) => {
  return (
    <Accordion>
      {props.cards.map((card, index) => {
        return (
          <Card key={`simple-accordion-${index}`}>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index.toString()}
              >
                {card.title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{card.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};
export default SimpleAccordion;
