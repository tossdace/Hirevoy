import { Link, useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Fort Kochi",
    description:
      "Historic coastal area known for colonial architecture, Chinese fishing nets, and cultural streets.",
  },
  {
    name: "Cherai Beach",
    description:
      "A long, calm beach with shallow waters, coconut groves, and occasional dolphin sightings.",
  },
];

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020617 0%, #020617 58%, #03122c 100%)",
        color: "white",
        padding: "4rem 1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "72rem",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <Link
            to="/"
            style={{
              color: "#4ade80",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ← Back to Home
          </Link>
        </div>

        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h1
            style={{
              margin: "0 0 1rem",
              fontSize: "clamp(2.25rem, 6vw, 3rem)",
              lineHeight: 1.1,
              fontWeight: "700",
            }}
          >
            Explore Destinations
          </h1>
          <p
            style={{
              margin: 0,
              color: "#94a3b8",
              fontSize: "1.125rem",
            }}
          >
            Pick a Kerala destination and find trusted local guides.
          </p>
        </div>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ color: "#4ade80", fontWeight: "500" }}>
            Limited guides available per location
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div className="destination-card" key={destination.name}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>

              <button onClick={() => navigate(`/guides?location=${destination.name}`)}>
                Find Guides in {destination.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
