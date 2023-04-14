import React from "react";
import { faCheckCircle, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrdersList = ({orders}) => {
    return (
        <>
            <h3 className="mb-3">Mi Lista de Órdenes</h3>
            {
                orders.map(order =>
                    <div className="mb-3 border rounded p-3" key={order.id}>
                        <div className="d-flex justify-content-between mb-1">
                            <div className="fw-bold">{order.nombre}</div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faEdit} className="cursor-pointer" />
                                    <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2" />
                                </div>
                            </div>

                        </div>
                        <div>
                            {
                                order.complete ?
                                <div className="text-success small">
                                    <FontAwesomeIcon icon={faCheckCircle} />(" ")
                                    Completado
                                </div>
                                :
                                <div className="text-success small">
                                    <FontAwesomeIcon icon={faClock} />(" ")
                                    Pendiente
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default OrdersList;