import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Calendar.css';

const UpcomingCalendar = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await axios.get(requests.fetchUpcomingMovies);
                setUpcomingMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
            }
        };
        fetchUpcoming();
    }, []);

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const moviesOnDate = upcomingMovies.filter(movie => {
                const releaseDate = new Date(movie.release_date);
                return releaseDate.toDateString() === date.toDateString();
            });
            if (moviesOnDate.length > 0) {
                return (
                    <div className="calendar-tile-content">
                        {moviesOnDate.map(movie => (
                            <div key={movie.id} className="movie-on-date">
                                {movie.title}
                            </div>
                        ))}
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="upcoming-calendar">
            <h2>Upcoming Movies Calendar</h2>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={tileContent}
            />
            <div className="selected-date-movies">
                <h3>Movies on {selectedDate.toDateString()}</h3>
                {upcomingMovies.filter(movie => {
                    const releaseDate = new Date(movie.release_date);
                    return releaseDate.toDateString() === selectedDate.toDateString();
                }).map(movie => (
                    <div key={movie.id} className="movie-item">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div>
                            <h4>{movie.title}</h4>
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingCalendar;
