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
//all-time charts
import AllDrugsAllTime from '../AllDrugsAllTime/AllDrugsAllTime';
import NetPromoterScore from '../NetPromoterScore/NetPromoterScore';
import RacePieChart from '../RacePieChart/RacePieChart';
import PregnantPieChart from '../PregnantPieChart/PregnantPieChart';
import BenzodiazepinesPieChart from '../BenzodiazepinesPieChart/BenzodiazepinesPieChart';

import CocainePieChart from '../CocainePieChart/CocainePieChart';

import InhalantsPieChart from '../InhalantsPieChart/InhalantsPieChart';

//monthly charts for drugs
import NicotineMonth from '../NicotineMonth/NicotineMonth';
import AllDrugsBar from '../AllDrugsBar/AllDrugsBar';

import AlcoholMonth from '../AlcoholMonth/AlcoholMonth';

import CocaineMonth from '../CocaineMonth/CocaineMonth';

import MarijuanaMonth from '../MarijuanaMonth/MarijuanaMonth';
import InhalantsMonth from '../InhalantsMonth/InhalantsMonth';
import OtherOpiodsMonth from '../OpiodsMonth/OpiodsMonth';
import BenzodiazepinesMonth from '../BenzodiazepinesMonth/BenzodiazepinesMonth';
import HallucinogenMonth from '../HallucinogenMonth/HallucinogenMonth';
import OTCMonth from '../OTCMonth/OTCMonth';
import OtherSubstancesMonth from '../OtherSubstancesMonth/OtherSubstancesMonth';
import AllDrugsLastMonth from '../AllDrugsLastMonth/AllDrugsLastMonth';

import HeroinMonth from '../HeroinMonth/HeroinMonth';

import MethMonth from '../MethMonth/MethMonth';


//charts for demographic data
import PastServicesBar from '../PastServicesBar/PastServicesBar';
import AlcoholPieChart from '../AlcoholPieChart/AlcoholPieChart';
import NicotinePieChart from '../NicotinePieChart/NicotinePieChart';
import MarijuanaMonthPieChart from '../MarijuanaMonthPieChart/MarijuanaMonthPieChart';

import MethAllTime from "../MethAllTime/MethAllTime";
import HeroinAllTime from '../HeroinAllTime/HeroinAllTime';
import OtherSubstancesAllTime from '../OtherSubstancesAllTime/OtherSubstancesAllTime';

import MarijuanaDetails from '../MarijuanaDetails/MarijuanaDetails';
import NicotineDetails from '../NicotineDetails/NicotineDetails';
import AlcoholDetails from '../AlcoholDetails/AlcoholDetails';


//layout mess around
import Album from '../Layout/Layout'
import CocaineDetails from '../CocaineDetails/CocaineDetails';
import OpioidsDetails from '../OpioidsDetails/OpioidsDetails';
import BenzodiazepinesDetails from '../BenzodiazepinesDetails/BenzodiazepinesDetails'
import HallucinogenDetails from '../HallucinogenDetails/HallucinogenDetails';
import InhalantsDetails from '../InhalantsDetails/InhalantsDetails';
import OTCDetails from '../OTCDetails/OTCDetails';
import AllDrugsDetails from '../AllDrugsDetails/AllDrugsDetails';
import OtherSubstancesDetails from '../OtherSubstancesDetails/OtherSubstancesDetails';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import Demographics from '../Demographics/Demographics';
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import TreatmentOptions from '../TreatmentOptions/TreatmentOptions';




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
          path="/cocainepie"
          >

            <CocainePieChart />
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
          path="/pregnant_pie">
            <PregnantPieChart />
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


          <ProtectedRoute
          exact
          path="/drugsBar">
            <AllDrugsBar />
          </ProtectedRoute>
          

          <ProtectedRoute exact path="/alcohol_last_month">
            <AlcoholMonth />
          </ProtectedRoute>

          <ProtectedRoute exact path="/cocaine_last_month">
            <CocaineMonth />
          </ProtectedRoute>


          <ProtectedRoute exact path="/marijuana_last_month">
            <MarijuanaMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/inhalants_last_month">
            <InhalantsMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/opiods_last_month">
            <OtherOpiodsMonth />

         </ProtectedRoute>
         <ProtectedRoute exact path="/benzodiazepines_last_month">
           <BenzodiazepinesMonth />
         </ProtectedRoute>
         <ProtectedRoute exact path="/hallucinogen_last_month">
           <HallucinogenMonth />
         </ProtectedRoute>
         <ProtectedRoute exact path="/otc_last_month">
           <OTCMonth />
         </ProtectedRoute>
         
         <ProtectedRoute exact path="/heroin_last_month">
           <HeroinMonth />
         </ProtectedRoute>

         <ProtectedRoute exact path="/other_substances_last_month">
           <OtherSubstancesMonth />
         </ProtectedRoute>

         <ProtectedRoute exact path="/all_drugs_last_month">
           <AllDrugsLastMonth />
         </ProtectedRoute>
         <ProtectedRoute exact path="/past_services_bar">       
          <PastServicesBar />
         </ProtectedRoute>
        <ProtectedRoute exact path="/benzodiazepines_pie_chart">
          <BenzodiazepinesPieChart />
        </ProtectedRoute>
         <ProtectedRoute exact path="/alcohol_pie_chart">       
          <AlcoholPieChart />
        </ProtectedRoute>    
        <ProtectedRoute exact path="/nicotine_pie_chart">       
          <NicotinePieChart />
         </ProtectedRoute>
         <ProtectedRoute exact path="/marijuana_month_pie_chart">       
          <MarijuanaMonthPieChart />
         </ProtectedRoute>
          <ProtectedRoute exact path="/benzodiazepines_last_month">
            <BenzodiazepinesMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/hallucinogen_last_month">
            <HallucinogenMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/meth_last_month">
            <MethMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/otc_last_month">
            <OTCMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/other_substances_last_month">
            <OtherSubstancesMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/all_drugs_last_month">
            <AllDrugsLastMonth />
          </ProtectedRoute>
          <ProtectedRoute exact path="/past_services_bar">       
            <PastServicesBar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/benzodiazepines_pie_chart">
            <BenzodiazepinesPieChart />
          </ProtectedRoute>
          <ProtectedRoute exact path="/alcohol_pie_chart">       
            <AlcoholPieChart />
          </ProtectedRoute> 
          <ProtectedRoute exact path="/nicotine_pie_chart">       
            <NicotinePieChart />
          </ProtectedRoute>
          <ProtectedRoute exact path="/inhalants_pie_chart">
            <InhalantsPieChart />
          </ProtectedRoute>

          <ProtectedRoute exact path="/meth_all_time">
            <MethAllTime />
          </ProtectedRoute>

          <ProtectedRoute exact path="/heroin_all_time">
            <HeroinAllTime />
          </ProtectedRoute>

          <ProtectedRoute exact path="/other_substances_all_time">
            <OtherSubstancesAllTime />
          </ProtectedRoute>

          <ProtectedRoute exact path="/marijuana_details">
            <MarijuanaDetails />
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/nicotine_details">
            <NicotineDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/alcohol_details">
            <AlcoholDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/cocaine_details">
            <CocaineDetails />
          </ProtectedRoute>

          <ProtectedRoute exact path="/opioids_details">
            <OpioidsDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/benzodiazepines_details">
            <BenzodiazepinesDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/hallucinogen_details">
            <HallucinogenDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/inhalants_details">
            <InhalantsDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/OTC_details">
            <OTCDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/all_drugs_details">
            <AllDrugsDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/other_substances_details">
            <OtherSubstancesDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/drugstatistics">
            <DrugStatistics />
          </ProtectedRoute>
          <ProtectedRoute exact path="/demographics">
            <Demographics />
          </ProtectedRoute>

          <ProtectedRoute exact path="/healthstatistics">
            <HealthStatistics />
          </ProtectedRoute>

          <ProtectedRoute exact path="/layout">
            <Album />
          </ProtectedRoute>

          <ProtectedRoute exact path="/treatmentoptions">
            <TreatmentOptions />
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
