// src/routes.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './features/Home/Home'; // Example home component
import EducationalArticle from './features/EducationalContent/EducationalArticle';
import UserContentList from './features/UserGeneratedContent/UserContentList';
import DeliveryTracker from './features/Delivery/DeliveryTracker';
import SubscriptionForm from './features/Subscription/SubscriptionForm';
import SustainabilityList from './features/Sustainability/SustainabilityList';
import Chatbot from './features/Chatbot/Chatbot';
import ARShopping from './features/ARShopping/ARShopping';
import LoyaltyProgram from './features/LoyaltyProgram/LoyaltyProgram';

const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/educational" component={EducationalArticle} />
        <Route path="/user-content" component={UserContentList} />
        <Route path="/delivery" component={DeliveryTracker} />
        <Route path="/subscription" component={SubscriptionForm} />
        <Route path="/sustainability" component={SustainabilityList} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/ar-shopping" component={ARShopping} />
        <Route path="/loyalty" component={LoyaltyProgram} />
        {/* Add more routes as needed */}
    </Switch>
);

export default routes;
