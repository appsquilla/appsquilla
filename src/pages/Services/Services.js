import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {Container, CardGroup, Card} from 'react-bootstrap'
import './Services.css'


function Services() {
    return (
        <>
        <Navbar />
        <Container>
            <h2>Check out the solutions we offer</h2>
        <CardGroup>
            <Card>
                <Card.Img variant="top" 
                src="images/services/website-design-service.jpg" />
                <Card.Body>
                    <Card.Title>Website Design</Card.Title>
                    <Card.Text>
                    We design responsive, sleek 
                    beautiful websites that stands out 
                    top in the race. Our initial on site 
                    SEO will help you get leads organically 
                    from the very first month. 
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 5000 only</Card.Text>
                    <Link to='/get-quote?service=web-design' 
                    className='btnQuote'>
                        Ask for Quotation
                    </Link>
                </Card.Body>
            </Card>
        
            <Card>
                <Card.Img variant="top" 
                src="images/services/ecommerce-solutions.jpg" />
                <Card.Body>
                    <Card.Title>Ecommerce Solutions</Card.Title>
                    <Card.Text>
                    Do you want to sell online? In this pandemic 
                    &amp; lockdown, this is in most demand. We develop 
                    customized online shop in java, reactjs, and we also 
                    offer wordpress woocommerce solutions for lower budgets.
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 15000 only</Card.Text>
                    <Link to='/get-quote?service=ecommerce' 
                    className='btnQuote'>
                        Ask for Quotation
                    </Link>
                </Card.Body>
            </Card>
        
            <Card>
                <Card.Img variant="top" 
                src="images/services/mobile-app-development.jpg" />
                <Card.Body>
                    <Card.Title>App Development</Card.Title>
                    <Card.Text>
                    Do you know that customers likes to open 
                    apps often than your website? Get one now. 
                    Our professionally structured android app 
                    gives another dimension to your business.
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 40000 only</Card.Text>
                    <Link to='/get-quote?service=android-mobile-app' 
                    className='btnQuote'>
                        Ask for Quotation
                    </Link>
                </Card.Body>
            </Card>
        </CardGroup>


        <CardGroup>
            <Card>
                <Card.Img variant="top" 
                src="images/services/graphic-design.jpg" />
                <Card.Body>
                    <Card.Title>Graphic Design</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Logo design</li>
                            <li>Flyers & Brochures</li>
                            <li>Business Cards</li>
                            <li>Stationery Design</li>
                            <li>Powerpoint presentation</li>
                            <li>Print Ads / Magazine</li>
                            <li>Banners</li>
                        </ul> 
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 500 only</Card.Text>
                    <Link to='/get-quote?service=graphic-design' 
                    className='btnQuote'>
                        Ask for Quotation
                    </Link>
                </Card.Body>
            </Card>
        
            <Card>
                <Card.Img variant="top" 
                src="images/services/software-solutions.jpg" />
                <Card.Body>
                    <Card.Title>Software Solutions</Card.Title>
                    <Card.Text>
                    Implementing new applications or softwares results in better 
                    productivity and profitability 
                    and more money added to the bottom line of the business. 
                    The internet has provided a number of ways to cut out tasks 
                    and save companies money. We build stable applications in latest 
                    technologies so you can focus on your ROI in more relaxed way.
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 25000 only</Card.Text>
                    <Link to='/get-quote?service=software' 
                    className='btnQuote'>
                        Ask for Quotation
                    </Link>
                </Card.Body>
            </Card>
 {/*       
            <Card>
                <Card.Img variant="top" 
                src="images/services/readymade-solutions.jpg" />
                <Card.Body>
                    <Card.Title>Readymade solutions</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Online Calendar</li>
                            <li>Help Desk Software</li>
                            <li>Shopping Carts</li>
                            <li>Poll/Survey/Feedback Software</li>
                            <li>Live Help Software</li>
                            <li>Messageboards / Chat Software</li>
                            <li>Examination / Admission Software</li>
                        </ul>
                    </Card.Text>
                    <Card.Text className="text-muted">Price starts from INR 5000 only</Card.Text>
                    <Link to='/ask-for-demo' 
                    className='btnQuote'>
                        Ask for Demo
                    </Link>
                </Card.Body>
            </Card>
 */}
        </CardGroup>

        
        </Container>
        <Footer />
        </>
    )
}

export default Services
