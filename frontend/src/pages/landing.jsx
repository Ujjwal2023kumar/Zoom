import { useNavigate, Link } from 'react-router-dom';

export default function LandingPage() {
    const router = useNavigate();
    return (
        <div className="container-fluid min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
                <div className="container">
                    <span className="navbar-brand h2">Apna Video Call</span>
                    <div className="d-flex">
                        <button className="btn btn-dark me-2" onClick={() => router('/session')}>Join as Guest</button>
                        <button className="btn btn-dark me-2" onClick={() => router('/auth')}>Register</button>
                        <button className="btn btn-dark" onClick={() => router('/auth')}>Login</button>
                    </div>
                </div>
            </nav>
            <div className="row align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
                <div className="col-md-6 text-center">
                    <h1 className="display-4 mb-3">
                        Connect with your loved Ones
                    </h1>
                    <p className="lead mb-4">Cover a distance by Video Call</p>
                    <Link to="/auth" className="btn btn-dark">Get Started</Link>
                </div>
                <div className="col-md-4 text-center">
                    <img src="/mobile.png" alt="Mobile" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
