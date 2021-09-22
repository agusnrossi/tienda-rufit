import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { MdPerson, MdEmail, MdPhone } from "react-icons/md";

export const Checkout = () => {
  const { cart, cartTotal } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      items: cart,
      total: cartTotal,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setMensaje(
          <Modal.Dialog >
            <Modal.Body>
              <p className="text-center mt-5 text-dark fs-3 text-middle">
                Gracias por su Compra, su numero de identificacion es: ${id}
              </p>
            </Modal.Body>
          </Modal.Dialog>
        );
      })
      .catch((err) => {
        setMensaje(`No se ha generado la orden`);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 mt-5">
          <Card className="border p-5 mt-3">
            <h1 className="text-center fw-bolder pb-4">Checkout</h1>
            <Form className="b" onSubmit={(e) => e.preventDefault()}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><MdPerson />
                </Form.Label>
                <Col sm="11">
                  <Form.Control
                    type="text"
                    className="form-control mb-2"
                    aria-describedby="nameHelp"
                    placeholder="Ingresa tu nombre"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><MdEmail />
                </Form.Label>
                <Col sm="11">
                  <Form.Control
                    type="email"

                    placeholder="Ingresa tu email"
                    className="form-control mb-1"
                    aria-describedby="emailHelp"
                    id="name"
                    name="email"
                    onChange={handleInputChange}
                  >
                  </Form.Control>
                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="1"><MdPhone />
                </Form.Label>
                <Col sm="11">
                  <Form.Control
                    type="number"
                    className="form-control"
                    aria-describedby="emailHelp"
                    id="name"
                    name="phone"
                    onChange={handleInputChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="btn btn-warning shadow p-3 mt-3 rounded-pill"
                  onClick={() => onClickHandler()}
                >
                  Enviar Pedido
                </Button>
              </Form.Group>
            </Form>
          </Card>
          {mensaje}
        </div>
      </div>
    </div>
  );
};


