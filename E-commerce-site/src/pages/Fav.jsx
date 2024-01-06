import React, { useEffect, useState } from 'react';

function Fav({ user }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) ?? []);
  }, []);

  const handleRemoveClick = (productId) => {
    const updatedFavs = favs.filter((item) => item.id !== productId);
    setFavs(updatedFavs);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  return (
    <>
      <h1>Favoriler</h1>
      <div className="list-group">
        {favs.map((item) => (
          <div
            key={item.id}
            className="list-group-item list-group-item-action d-flex flex-row align-items-center"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="img-thumbnail"
                style={{ height: '200px', objectFit: 'cover', marginRight: '10px' }}
              />
            )}
            <div className="flex-grow-1">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.title.toUpperCase()}</h5>
                {user && (
                  <small>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemoveClick(item.id)}
                    >
                      Remove
                    </button>
                  </small>
                )}
              </div>
              <p className="mb-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fav;
