import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalBooking = ({
    calLink = "thrive-sport/30min", // Default example, to be replaced by user
    onBookingSuccessful
}) => {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#1B263B" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });

            cal("on", {
                action: "bookingSuccessful",
                callback: (e) => {
                    // console.log("Booking successful", e);
                    if (onBookingSuccessful) onBookingSuccessful(e);
                }
            });
        })();
    }, [onBookingSuccessful]);

    return (
        <div className="w-full h-[600px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
            <Cal
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: 'month_view', theme: 'light', useSlotsViewOnSmallScreen: true }}
            />
        </div>
    );
};

export default CalBooking;
