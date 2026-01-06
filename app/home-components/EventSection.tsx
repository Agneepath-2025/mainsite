import React from "react";

type SportEvent = {
  name: string;
  image: string;
  color: "orange" | "blue";
};

const events: SportEvent[] = [
  { name: "8 Ball", image: "8-ball.png", color: "orange" },
  { name: "Badminton", image: "badminton.png", color: "orange" },
  { name: "Basketball", image: "basketball.png", color: "blue" },
  { name: "Chess", image: "chess.png", color: "orange" },
  { name: "Cricket", image: "cricket.png", color: "orange" },
  { name: "Football", image: "football.png", color: "blue" },
  { name: "Futsal", image: "futsal.png", color: "orange" },
  { name: "Shooting", image: "shooting.png", color: "blue" },
  { name: "Squash", image: "squash.png", color: "orange" },
  { name: "Snooker", image: "snooker.png", color: "blue" },
  { name: "Swimming", image: "swimming.png", color: "blue" },
  { name: "Tennis", image: "tennis.png", color: "orange" },
  { name: "Volleyball", image: "volleyball.png", color: "blue" },
];

const getInvertedBg = (color: "orange" | "blue") =>
  color === "orange" ? "#2563eb" : "#f97316";

const EventSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Sports Events</h2>
      <div style={styles.cardContainer}>
        {events.map((event) => (
          <div key={event.name} style={styles.cardWrapper}>
            <div
              style={{
                ...styles.card,
                backgroundColor: getInvertedBg(event.color),
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={`/images/${event.image}`}
                  alt={event.name}
                  style={styles.image}
                />
              </div>
            </div>
            <p style={styles.cardTitle}>{event.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "3rem 1.5rem",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "2.5rem",
    color: "#fff",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  cardWrapper: {
    textAlign: "center",
  },
  card: {
    width: "160px",
    height: "220px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 16px 35px rgba(0,0,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    lineHeight: 0, // remove any inline spacing
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center top", // crop top blank space
    display: "block",
    verticalAlign: "top",
    transform: "scale(1.05)", // tiny scale to remove side gaps
  },
  cardTitle: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#fff",
  },
};

export default EventSection;
