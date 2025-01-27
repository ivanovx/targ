import { ListGroup } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function Sidebar() {
    return (
        <Accordion>
            <AccordionPanel>
                <AccordionTitle>Забележителности</AccordionTitle>
                <AccordionContent>
                    <ListGroup>
                        <ListGroup.Item href="#">Profile</ListGroup.Item>
                        <ListGroup.Item href="#">Settings</ListGroup.Item>
                        <ListGroup.Item href="#">Messages</ListGroup.Item>
                        <ListGroup.Item href="#">Download</ListGroup.Item>
                    </ListGroup>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Личности</AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Туризъм</AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tailwindui.com/"
                                rel="nofollow"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                Tailwind UI
                            </a>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}
