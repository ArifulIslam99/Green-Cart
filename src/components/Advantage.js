import React from 'react';
import { Accordion } from 'react-bootstrap';

const Advantage = () => {
  return (
    <div className='w-75 mx-auto'>
      <h2 className="fs-1 fw-bold text-primary my-2 text-center">Why shop from us ?</h2>
      <div className="row d-flex justify-content-center align-items-center  mx-auto">
        <div className="col-lg-6 my-4">
          <img className="w-75 h-75 img-fluid " src="https://img.freepik.com/premium-photo/tea-plantation-lonley-tree-sunset-time-nature-background_130291-3695.jpg?w=740" alt="" />
        </div>
        <div className="col-lg-6 my-4">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>What makes you buy a green product?</Accordion.Header>
              <Accordion.Body>

                A green product is one which satisfies consumers' needs without damaging the environment and contributes towards a more sustainable world (Shamdasami, Chon-Lin and Richmont, 1993). These products are environmentally superior and have low environmental impact.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do you encourage people to buy green products?</Accordion.Header>
              <Accordion.Body>
                1.Get third-party certifications to endorse your green products. ...
                2.Increase the percentage of product sales going to charity. ...
                3.Surprise your customers by giving a portion of utilitarian product sales to an unrelated charity. ...
                4.Avoid guilt-inducing marketing that conjures negative feelings.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Why green is important in our life?</Accordion.Header>
              <Accordion.Body>
                Green living absolutely helps to prevent further climate change! Green living is a way to directly reduce the negative impacts of climate change as it encourages individuals to reduce their own carbon footprint, which collectively – can help reduce global temperatures.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Advantage;