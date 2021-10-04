import { Card, Col } from "react-bootstrap";

//single Card for teaching process components
const MyCard = (props) => {
    const {src,title} = props;
    return (
        <Col sm={3} className="d-flex justify-content-center">
            <Card style={{width:'25rem'}} className="p-3 shadow rounded-3">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={src} className="w-100"/>
                </div>
                <Card.Title className="fs-3">{title}</Card.Title>
            </Card>
        </Col>
    )

}

export default MyCard;