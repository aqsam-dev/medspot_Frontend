import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Otp from './pages/auth/Otp';
import Newpass from './pages/auth/Newpass';
import Forgetpass from './pages/auth/Forgetpass';
import StepPharmacy from './pages/auth/StepPharmacy';
import StepPharmacist from './pages/auth/StepPharmacist';
import StepLoginFiles from './pages/auth/StepLoginFiles';
import Dashboard from './pages/dashboard/Dashboard';
import Stock from './pages/stock/StockDashbaord';
import POS from './pages/order/POS';
import Prescription from './pages/prescription/Prescription';
import PrescriptionResponse from './pages/prescription/PrescriptionResponse';
import Reservations from './pages/reservations/Reservations';
import Reviews from './pages/review/Reviews';
import HelpCenter from './pages/profile/HelpCenter';
import Notifications from './pages/profile/Notifications';
import PharmacyProfile from './pages/profile/PharmacyProfile';
import POSIntegration from './pages/profile/POSIntegrations';
import Settings from './pages/profile/Settings';
import './app.css';

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/pharmacy' element={<StepPharmacy />} />
            <Route path='/pharmacist' element={<StepPharmacist />} />
            <Route path='/loginc' element={<StepLoginFiles />} />
            <Route path='/forgetpass' element={<Forgetpass />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/newpass' element={<Newpass />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/pos' element={<POS />} />
            <Route path='/prescription' element={<Prescription />} />
            <Route path='/presponse' element={<PrescriptionResponse />} />
            <Route path='/reservation' element={<Reservations />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path="/profile" element={<PharmacyProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pos-integration" element={<POSIntegration />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help" element={<HelpCenter />} />
        </Routes>



    );
}

export default App;



