import React from "react";
import { Card, Button } from "react-bootstrap";

function Card1() {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://s1.cdn.autoevolution.com/images/news/gallery/science-says-mad-max-fury-road-has-the-most-heart-pumping-car-chases-ever_3.jpg"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card&apos; content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default Card1;
