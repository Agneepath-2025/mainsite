import React from "react";

type SportEvent = {
  name: string;
  image: string;
  color: "dark" | "slate" | "orange";
};

const events: SportEvent[] = [  
  { name: "Squash", image: "squash.PNG", color: "dark" },
  { name: "Football", image: "football.PNG", color: "dark" },
  { name: "Badminton", image: "badminton.PNG", color: "dark" },
  { name: "Basketball", image: "basketball.PNG", color: "dark" },
  { name: "Cricket", image: "cricket.PNG", color: "dark" },
  { name: "Volleyball", image: "volleyball.PNG", color: "dark" },
  { name: "Chess", image: "chess.PNG", color: "dark" },
  { name: "Snooker", image: "snooker.PNG", color: "dark" },
  { name: "Pool", image: "8-ball.PNG", color: "dark" },
  { name: "Shooting", image: "shooting.PNG", color: "dark" },
  { name: "Tennis", image: "tennis.PNG", color: "dark" },
  { name: "Futsal", image: "futsal.PNG", color: "dark" },
];

const getCardBg = (color: "dark" | "slate" | "orange") => {
  switch(color) {
    case "dark": return "#242a4a";
    case "slate": return "#2c355d";
    case "orange": return "#d74f2a";
    default: return "#242a4a";
  }
};

const EventSection: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={isMobile ? styles.cardContainerMobile : isTablet ? styles.cardContainerTablet : styles.cardContainerDesktop}>
        {events.map((event) => (
          <div key={event.name} style={styles.cardWrapper}>
            <div
              style={{
                ...(isMobile ? styles.cardMobile : isTablet ? styles.cardTablet : styles.card),
                backgroundColor: getCardBg(event.color),
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
            <p style={isMobile ? styles.cardTitleMobile : styles.cardTitle}>{event.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  cardContainerDesktop: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 240px)",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "start",
  },
  cardContainerTablet: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 240px)",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "start",
  },
  cardContainerMobile: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "280px",
    margin: "0 auto",
  },
  cardWrapper: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "240px",
    height: "360px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(36, 42, 74, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    backgroundColor: "#242a4a",
  },
  cardTablet: {
    width: "240px",
    height: "360px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(36, 42, 74, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    backgroundColor: "#242a4a",
  },
  cardMobile: {
    width: "100%",
    height: "270px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(36, 42, 74, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    backgroundColor: "#242a4a",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    lineHeight: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242a4a",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
    verticalAlign: "middle",
    transform: "scale(1.08)",
  },
  cardTitle: {
    marginTop: "0.75rem",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#242a4a",
    letterSpacing: "0.3px",
  },
  cardTitleMobile: {
    marginTop: "0.5rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#242a4a",
    letterSpacing: "0.3px",
  },
};

export default EventSection;
