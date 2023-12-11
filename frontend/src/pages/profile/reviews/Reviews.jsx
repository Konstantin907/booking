import React from "react";
import ProfileNav from "../../../components/profileNav/ProfileNav";
import "./reviews.css";

const Reviews = () => {
  const reviews = [
    {
      _id: "r1",
      user: "John Doe",
      hotel: "Ocean View Resort",
      room: "Deluxe Suite",
      rating: 5,
      comment:
        "Amazing experience! The hotel was beautiful and the staff were incredibly helpful.",
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02")
    },
    {
      _id: "r2",
      user: "Alice Johnson",
      hotel: "Mountain Escape Hotel",
      room: "Cozy Cabin Room",
      rating: 4,
      comment:
        "The room was comfortable and well-maintained, though a bit small.",
      createdAt: new Date("2023-02-15"),
      updatedAt: new Date("2023-02-16")
    }
  ];

  return (
    <>
      <ProfileNav />
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review._id} className="review-card">
            <h3>
              {review.hotel} - {review.room}
            </h3>
            <p className="review-user">Reviewed by {review.user}</p>
            <p className="review-rating">Rating: {review.rating} / 5</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
