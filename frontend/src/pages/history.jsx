import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // Optionally show a Bootstrap alert for error
            }
        };
        fetchHistory();
    }, [getHistoryOfUser]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="container py-4">
            <button className="btn btn-dark mb-3" onClick={() => routeTo('/home')}>
                <i className="bi bi-house-door me-2" /> Home
            </button>
            <h3 className="mb-4">Meeting History</h3>
            {meetings.length > 0 ? (
                <div className="row">
                    {meetings.map((e, i) => (
                        <div className="col-md-6 mb-3" key={i}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Code: {e.meetingCode}</h5>
                                    <p className="card-text">Date: {formatDate(e.date)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-info">No meeting history found.</div>
            )}
        </div>
    );
}
