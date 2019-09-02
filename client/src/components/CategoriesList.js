import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner"

CategoriesList.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategoryId: PropTypes.number.isRequired,
    handleChangeCategory: PropTypes.func.isRequired
}

function CategoriesList(props) {

    return (

        <Card className="my-2 shadow-sm">

            <Card.Header className="text-success" as="h5">
                <strong>Categorías</strong>
            </Card.Header>

            <Card.Body className="p-0 py-md-4">
                <ul className="list-group list-group-horizontal-md justify-content-center flex-wrap">
                    {props.categories.length ? (
                        props.categories.map(category => {
                            if (category.categoryId === props.selectedCategoryId) {
                                return (
                                    <button
                                        type="button"
                                        key={category.categoryId}
                                        className="list-group-item border-0 rounded-0 active"
                                        onClick={() => props.handleChangeCategory(category.categoryId)}>
                                        {category.name}
                                    </button>
                                );
                            } else {
                                return (
                                    <button
                                        type="button"
                                        key={category.categoryId}
                                        className="list-group-item border-0 rounded-0"
                                        onClick={() => props.handleChangeCategory(category.categoryId)}>
                                        {category.name}
                                    </button>
                                );
                            }
                        })
                    ) : (
                            <Spinner animation="border" role="status" variant="success" />
                        )}
                </ul>
            </Card.Body>
        </Card>

    );

}

export default CategoriesList;
