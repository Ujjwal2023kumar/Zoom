import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    const navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    const handleJoinVideoCall = async (e) => {
        e.preventDefault();
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <span className="navbar-brand h2">Video Call</span>
                <div className="d-flex align-items-center ms-auto">
                    <button className="btn btn-dark me-2" onClick={() => navigate('/history')}>
                        <span className="me-1"><i className="bi bi-clock-history" /></span> History
                    </button>
                    <button className="btn btn-dark" onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/auth');
                    }}>
                        Logout
                    </button>
                </div>
            </nav>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="mb-4">Providing Quality Video Call Just Like Quality Education</h2>
                    <form className="d-flex" onSubmit={handleJoinVideoCall}>
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Meeting Code"
                            value={meetingCode}
                            onChange={e => setMeetingCode(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-dark">Join</button>
                    </form>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img srcSet="/logo3.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}
export default withAuth(HomeComponent);
