import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

SufferingsList.propTypes = {
    sufferings: PropTypes.array.isRequired,
    selectedSuffering: PropTypes.string.isRequired,
    handleChangeSuffering: PropTypes.func.isRequired
}

function SufferingsList(props) {

    return (

        <Card className="my-2 shadow-sm">

            <Card.Header className="text-success" as="h5">
                <strong>Padecimientos</strong>
            </Card.Header>

            <Card.Body className="p-0">
                <div className="list-group shadow-sm">
                    {props.sufferings.length ? (
                        props.sufferings.map(suff => {
                            if (suff.name === props.selectedSuffering) {
                                return (
                                    <button
                                        type="button"
                                        key={suff.name}
                                        className="list-group-item list-group-item-action border-0 rounded-0 active"
                                        onClick={() => props.handleChangeSuffering(suff.name)}>
                                        {suff.name} <span className="badge badge-light ml-2">{suff.qty}</span>
                                    </button>
                                );
                            } else {
                                return (
                                    <button
                                        type="button"
                                        key={suff.name}
                                        className="list-group-item list-group-item-action border-0 rounded-0"
                                        onClick={() => props.handleChangeSuffering(suff.name)}>
                                        {suff.name} <span className="badge badge-primary ml-2">{suff.qty}</span>
                                    </button>
                                );
                            }
                        })
                    ) : (
                            <div className="text-center">
                                <Spinner className="my-3" animation="border" role="status" variant="success" />
                            </div>

                        )}
                </div>
            </Card.Body>
        </Card>

    );

}

export default SufferingsList;