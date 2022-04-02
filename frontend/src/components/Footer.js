import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* Kane Whiteside*/}
						<a
							rel='noopener noreferrer'
							href='https://github.com/kwservices12'
							target='_blank'
							className='kane-whiteside'
						
						>
							<i className='fas fa-user-circle'></i> Kane Whiteside Github
						</a>
						Copyright &copy; React E-Commerce
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
