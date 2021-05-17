import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MarijuanaAllTime from '../MarijuanaAllTime/MarijuanaAllTime';
import InhalantsAllTime from '../InhalantsAllTime/InhalantsAllTime';
import CocaineAllTime from '../CocaineAllTime/CocaineAllTime';
import HallucinogenAllTime from '../HallucinogenAllTime/HallucinogenAllTime';
import OpiodsAllTime from '../OpiodsAllTime/OpiodsAllTime';
import BenzodiazepinesAllTime from '../BenzodiazepinesAllTime/BenzodiazepinesAllTime';
import SexualOrientation from '../SexualOrientation/SexualOrientation';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';
import MarijuanaPieChart from '../MarijuanaPieChart/MarijuanaPieChart';
import HallucinogenPieChart from '../HallucinogenPieChart/HallucinogenPieChart';
import OTCPieChart from '../OTCPieChart/OTCPieChart';
import JusticeInvolved from '../JusticeInvolved/JusticeInvolved';
import MentalHealth from '../MentalHealth/MentalHealth';
import Race from '../Race/Race';
import Pregnant from '../Pregnant/Pregnant'
import PastServices from '../PastServices/PastServices';
import FetalAlcoholSyndromePieChart from '../FetalAlcoholSyndromePieChart/FetalAlcoholSyndromePieChart';

import Gender from '../Gender/Gender';
import Hi from '../HiComponent/HiComponent';

import './App.css';

import AllDrugsAllTime from '../AllDrugsAllTime/AllDrugsAllTime';
import NetPromoterScore from '../NetPromoterScore/NetPromoterScore';
import RacePieChart from '../RacePieChart/RacePieChart';

//monthly charts for drugs
import NicotineMonth from '../NicotineMonth/NicotineMonth';
import AlcoholMonth from '../AlcoholMonth/AlcoholMonth';
import MarijuanaMonth from '../MarijuanaMonth/MarijuanaMonth';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/marijuana_all_time"
          >
            <MarijuanaAllTime />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/inhalants_all_time"
          >
            <InhalantsAllTime />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/cocaine_all_time"
          >
            <CocaineAllTime />
          </ProtectedRoute>
          <ProtectedRoute 
          exact
          path="/benzodiazepines_all_time"
          >
            <BenzodiazepinesAllTime />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/opiods_all_time"
          >
            <OpiodsAllTime />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/hallucinogen_all_time"
          >
            <HallucinogenAllTime />
          </ProtectedRoute>
          <ProtectedRoute 
          exact
          path="/sexual_orientation"
          >
            <SexualOrientation />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/gender"
          >
            <Gender />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/fas"
          >
            <FetalAlcoholSyndrome />
          </ProtectedRoute>


          <ProtectedRoute 
          exact
          path="/justice_involved"
          >
            <JusticeInvolved />
          </ProtectedRoute>
          <ProtectedRoute
          exact
          path="/net_promoter_scores"
          >
            <NetPromoterScore />

          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/mental_health"
          >
            <MentalHealth />
          </ProtectedRoute>


          <ProtectedRoute 
          exact
          path="/mjPie"
          >

            <MarijuanaPieChart />
          </ProtectedRoute>
          
          <ProtectedRoute 
          exact
          path="/lsdPie"
          >

            <HallucinogenPieChart />
          </ProtectedRoute>
          
          <ProtectedRoute 
          exact
          path="/otcPie"
          >

            <OTCPieChart />
          </ProtectedRoute>

          <ProtectedRoute 
          exact
          path="/race">
            <Race />

          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/all_drugs_all_time"
          > 
          <AllDrugsAllTime />
          </ProtectedRoute>
          <ProtectedRoute
          exact
          path="/pregnant">
            <Pregnant />
          </ProtectedRoute>
          <ProtectedRoute
          exact
          path="/past_services">
            <PastServices />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/racePie">
            <RacePieChart />
          </ProtectedRoute>

          <ProtectedRoute exact path="/nicotine_last_month">
            <NicotineMonth />
          </ProtectedRoute>
          <ProtectedRoute
          exact
          path="/fasPie">
            <FetalAlcoholSyndromePieChart />
          </ProtectedRoute>
          <ProtectedRoute exact path="/alcohol_last_month">
            <AlcoholMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/marijuana_last_month">
            <MarijuanaMonth />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
