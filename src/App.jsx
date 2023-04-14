import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, TableRow } from '@mui/material'
import { Col } from 'react-bootstrap'
import OrdersList from './OrderList'
import axios from 'axios'

function App() {
  
  const [orders,setOrders] = useState([]);
  const loadOrders = () => {
    axios.get('http://localhost:8080/tareas')
    .then(({data}) => setOrders(data));
  }

  useEffect(loadOrders, []);

  return (
    <>
      <Container>
        <TableRow>
          <Col>
          <OrdersList orders={ orders } />
          </Col>
        </TableRow>
      </Container>
    </>
  )
}

export default App
