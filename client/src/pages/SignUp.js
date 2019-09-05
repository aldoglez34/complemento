import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";

function SignUp() {

    return (
        <Layout>
            <Container className="mt-4 mb-4">

                {/* titles */}
                <h2 className="pt-4 mb-4"><strong>Regístrate con nosotros</strong></h2>

                {/* subtitle */}
                <h5 className="pt-4 t-4">Datos de Usuario</h5>
                <hr />

                {/* first form */}
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Nombre(s)</Form.Label>
                            <Form.Control placeholder="Nombre(s)" />
                        </Form.Group>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Apellido(s)</Form.Label>
                            <Form.Control placeholder="Apellido(s)" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo Electrónico" />
                        </Form.Group>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Teléfono Celular</Form.Label>
                            <Form.Control placeholder="Teléfono Celular" />
                        </Form.Group>
                    </Form.Row>

                    {/* subtitle */}
                    <h5 className="my-3">Contraseña</h5>
                    <hr />

                    {/* second form */}
                    <Form.Row>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Repetir contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Repetir contraseña" />
                        </Form.Group>
                    </Form.Row>

                    {/* subtitle */}
                    <h5 className="my-3">Datos de Entrega</h5>
                    <hr />

                    {/* third form */}
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Calle</Form.Label>
                            <Form.Control placeholder="Calle" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md={6}>
                            <Form.Label className="text-muted">Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" />
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Form.Label className="text-muted">Estado</Form.Label>
                            <Form.Control as="select" defaultValue={"DEFAULT"}>
                                <option value="DEFAULT" disabled>Elige...</option>
                                <option>Aguascalientes</option>
                                <option>Baja California</option>
                                <option>Baja California Sur</option>
                                <option>Campeche</option>
                                <option>Chiapas</option>
                                <option>Chihuahua</option>
                                <option>Ciudad de México</option>
                                <option>Coahuila</option>
                                <option>Colima</option>
                                <option>Durango</option>
                                <option>Estado de México</option>
                                <option>Guanajuato</option>
                                <option>Guerrero</option>
                                <option>Hidalgo</option>
                                <option>Jalisco</option>
                                <option>Michoacán</option>
                                <option>Morelos</option>
                                <option>Nayarit</option>
                                <option>Nuevo León</option>
                                <option>Oaxaca</option>
                                <option>Puebla</option>
                                <option>Querétaro</option>
                                <option>Quintana Roo</option>
                                <option>San Luis Potosí</option>
                                <option>Sinaloa</option>
                                <option>Sonora</option>
                                <option>Tabasco</option>
                                <option>Tamaulipas</option>
                                <option>Tlaxcala</option>
                                <option>Veracruz</option>
                                <option>Yucatán</option>
                                <option>Zacatecas</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md={2} >
                            <Form.Label className="text-muted">Código Postal</Form.Label>
                            <Form.Control type="text" placeholder="Código Postal" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Comentarios</Form.Label>
                            <Form.Control as="textarea" rows="3"
                                placeholder="Comentarios adicionales con respecto a tu dirección o a la entrega de productos" />
                        </Form.Group>
                    </Form.Row>
                </Form>

                {/* submit */}
                <div className="text-center">
                    <Button className="my-3" variant="primary" type="submit">Registrarme</Button>
                </div>

            </Container>
        </Layout>
    );
}

export default SignUp;
