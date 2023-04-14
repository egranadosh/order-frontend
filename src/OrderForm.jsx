import React from "react";
import { FormGroup, Form, TextField, Input } from "@mui/material";

const OrderForm = () => {
    return (
        <>
            <h3 className="mb-3">Nueva Orden</h3>
        <Form>
            <FormGroup>
                <TextField name="nombre" label="Nombre" required></TextField>
            </FormGroup>
            <FormGroup>
                <Input:checkbox name></Input:checkbox>
                <label htmlFor="">Completado</label>
            </FormGroup>
        </Form>
            
        </>
    )
}