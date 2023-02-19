import React, { useState } from 'react'
import { useROS } from './react-ros/ROS'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function ToggleConnect() {

	const { isConnected, topics, url, changeUrl, toggleConnection } = useROS();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<br></br>
			<br></br>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Container>
						<Row>
							<Col lg={1}>
								<BootstrapSwitchButton
									defaultChecked={true} onstyle="success" offstyle="danger" width={75}
									onChange={() => {
											toggleConnection();
											handleShow();
										}
									} 
							/></Col>
							<Col lg={4}>
								<Form.Control type="text" placeholder="Enter ROS url" defaultValue={url}
									onChange={event =>
										changeUrl(event.target.value)
									}
							/></Col>
						</Row>
					</Container>
				</Form.Group>
			</Form>

			<Modal show={show} onHide={handleClose}>

				<Modal.Header closeButton>
					<Modal.Title>Ros Web Bridge Connection</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{
						isConnected ?
							<Alert variant="success">Connected to ROS {url}</Alert> :
							<Alert variant="danger">Not connected to ROS</Alert>
					}

					<Card style={{ width: '18rem' }}>
						<ListGroup variant="flush">
							{
								topics.map((topic, i) =>
									<ListGroup.Item key={i}>{topic.path}</ListGroup.Item>
								)
							}
						</ListGroup>
					</Card>

				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>

			</Modal>

		</div>
	);
}
export default ToggleConnect;