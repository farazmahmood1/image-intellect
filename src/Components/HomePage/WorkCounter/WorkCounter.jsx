import React, { useEffect, useState, useRef } from 'react';
import './WorkCounter.scss';

const WorkCounter = () => {
    const [counters, setCounters] = useState({
        customers: 0,
        designThinkers: 0,
        languages: 0,
    });

    const counterContainerRef = useRef(null);

    useEffect(() => {
        const countersToReach = {
            customers: 1600,
            designThinkers: 500,
            languages: 12,
        };

        const animationDuration = 2000;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const startTime = Date.now();

                    const updateCounters = () => {
                        const currentTime = Date.now();
                        const elapsedTime = currentTime - startTime;

                        if (elapsedTime < animationDuration) {
                            setCounters((prevCounters) => ({
                                customers: Math.ceil(
                                    (countersToReach.customers / animationDuration) * elapsedTime
                                ),
                                designThinkers: Math.ceil(
                                    (countersToReach.designThinkers / animationDuration) * elapsedTime
                                ),
                                languages: Math.ceil(
                                    (countersToReach.languages / animationDuration) * elapsedTime
                                ),
                            }));

                            requestAnimationFrame(updateCounters);
                        } else {
                            setCounters(countersToReach);
                        }
                    };

                    updateCounters();
                    observer.disconnect(); // Stop observing once the animation has started
                }
            });
        });

        if (counterContainerRef.current) {
            observer.observe(counterContainerRef.current);
        }

        return () => {
            if (counterContainerRef.current) {
                observer.unobserve(counterContainerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="counter-container" ref={counterContainerRef}>
                <div className="counter">
                    <div className="count">{counters.customers}+ Customers</div>
                    <div className="label">Served</div>
                </div>

                <div className="counter">
                    <div className="count">{counters.designThinkers}+ Design</div>
                    <div className="label">Thinkers</div>
                </div>

                <div className="counter">
                    <div className="count">{counters.languages}+ Languages</div>
                    <div className="label">Spoken</div>
                </div>

                <div className="counter">
                    <div className="count">CMMI5</div>
                    <div className="label">Maturity Level</div>
                </div>
            </div>
        </>
    );
};

export default WorkCounter;

