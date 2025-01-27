import { ListGroup } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function Sidebar() {
    return (
        <Accordion>
            <AccordionPanel>
                <AccordionTitle>Забележителности</AccordionTitle>
                <AccordionContent>
                    <ListGroup>
                        <ListGroup.Item href="#">Къща музей "Асен Балкански"</ListGroup.Item>
                        <ListGroup.Item href="#">Часовникова кула - Чупрене</ListGroup.Item>
                        <ListGroup.Item href="#">Църкава "Свети Николай"</ListGroup.Item>
                    </ListGroup>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Личности</AccordionTitle>
                <AccordionContent>
                    <ListGroup>
                        <ListGroup.Item href="/people/asen-balkanski">Асен Балкански</ListGroup.Item>
                    </ListGroup>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}
