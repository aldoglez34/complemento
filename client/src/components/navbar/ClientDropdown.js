import React, { useState } from "react";
import { Dropdown, Nav, NavItem, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../redux/actions/user";
import { withFirebase } from "../../firebase";

const ClientDropdown = ({ firebase }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const client = useSelector(state => state.user);
  // const logout = firebase => {
  //   // firebase._signOut;
  //   // fire
  //   //   .auth()
  //   //   .signOut()
  //   //   .then(() => {
  //   //     // dispatch(userActions.logoutUser());
  //   //     window.location.href = "/";
  //   //   })
  //   //   .catch(error => console.log(error));
  // };

  const content = type => {
    return (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row px-3 py-2 mb-1">
            <div className="d-flex flex-column">
              <h6>
                <strong style={{ textTransform: "uppercase" }}>
                  {client.name + " " + client.firstSurname}
                </strong>
              </h6>
              <hr className="myDivider mb-0" />
            </div>
            <div className="ml-auto">
              <i className="fas fa-times" onClick={handleClose} />
            </div>
          </div>
        ) : type === "dropdown" ? (
          <div className="px-3 py-2 mb-1">
            <h6>
              <strong style={{ textTransform: "uppercase" }}>
                {client.name + " " + client.firstSurname}
              </strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        {/* the rest */}
        <Dropdown.Item
          className="navbarDropdownItemStyle px-3"
          href="/client/info"
          disabled
        >
          Mis datos
        </Dropdown.Item>
        <Dropdown.Item
          className="navbarDropdownItemStyle px-3"
          href="/client/shipment"
          disabled
        >
          Mis pedidos
        </Dropdown.Item>
        <Dropdown.Item
          className="navbarDropdownItemStyle px-3"
          href="/client/favorites"
        >
          Mis favoritos
        </Dropdown.Item>
        <Dropdown.Divider className="mt-1 mb-2" />
        <Dropdown.Item
          className="navbarDropdownItemStyle px-3"
          onClick={firebase._signOut}
        >
          Cerrar sesión
        </Dropdown.Item>
      </>
    );
  };

  return (
    <>
      {/* small screens */}
      <div className="d-block d-md-none">
        <Button
          variant="transparent"
          className="clientLoginDropdown ml-0 p-0"
          onClick={handleShow}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <i className="fas fa-user dropdownIcon mr-1" />
          {client.name}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-0 py-2">
            {content("modal", firebase)}
          </Modal.Body>
        </Modal>
      </div>
      {/* medium screens */}
      <div className="d-none d-md-block">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle
            as={Nav.Link}
            className="clientLoginDropdown p-2 pt-3"
            title={client.name}
          >
            <i className="fas fa-user dropdownIcon mr-1" />
            {client.name}
          </Dropdown.Toggle>

          <Dropdown.Menu alignRight data-display="static">
            {content("dropdown", firebase)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default withFirebase(ClientDropdown);
