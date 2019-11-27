import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';

const content = require('../content/pricing.json');

const icons = {
  faUserTie: <FontAwesomeIcon icon={faUserTie} />,
  faShoppingCart: <FontAwesomeIcon icon={faShoppingCart} />,
  faPlus: <FontAwesomeIcon icon={faPlus} />,
};

const Pricing = () => (
  <div className="pricing">
    <h1 className="pricing-header">{'Let\'s create your dream website.'}</h1>
    <div className="plans">
      {content.plans.map((plan) => (
        <div className="plan-container" key={plan.name}>
          <div className="plan">
            <div className="plan-icon">{icons[plan.icon]}</div>
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <h4 className="plan-description">{plan.description}</h4>
            {plan.features && (
              <ul>{plan.features.map((feature) => <li key={feature} className="plan-feature"><p>{feature}</p></li>)}</ul>
            )}
            {plan.details && <p className="plan-details">{plan.details}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
