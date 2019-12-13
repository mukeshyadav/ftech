import React from 'react'
import { Row, Col } from 'reactstrap'

export const MainTitle = ({ title }) => (
  <Row>
    <Col>
    <h1 className='main-heading pt-3 pb-3 h3'>{title}</h1>
    </Col>
  </Row>
)
