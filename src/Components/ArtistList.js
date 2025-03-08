import React from "react";

function ArtistList() {
  const artists = [
    {
      name: "Thomas Edward",
      username: "@thewildwithyou",
      background: "artist1.png",
      profile: "profile1.png",
    },
    {
      name: "Chris Doe",
      username: "@thewildwithyou",
      background: "artist2.png",
      profile: "profile2.png",
    },
    {
      name: "Emilie Jones",
      username: "@thewildwithyou",
      background: "artist3.png",
      profile: "profile3.png",
    },
    {
      name: "Jessica Williams",
      username: "@thewildwithyou",
      background: "artist4.png",
      profile: "profile4.png",
    },
  ];

  return (
    <div className="artist-list">
      <div className="tabs">
        <span>
          <b>Artists</b>
        </span>
        <span className="active">Photographers</span>
      </div>
      {artists.map((artist, index) => (
        <div
          key={index}
          className="artist-card"
          style={{ backgroundImage: `url(${artist.background})` }}
        >
          <div className="artist-info">
            <div className="profile-pic">
              <img src={artist.profile} alt={artist.name} />
              <div className="artist-text">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-username">{artist.username}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtistList;
