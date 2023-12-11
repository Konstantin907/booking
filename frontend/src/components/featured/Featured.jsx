import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCityWithRooms");

  const { data: citiesData } = useFetch("/hotels/distinctCities");

  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="featured">
      {loading ? (
        <div>Loading please wait...</div>
      ) : error ? (
        <div>Error occurred: {error.message}</div>
      ) : (
        <>
          {citiesData.map((city, index) => (
            <div className="featuredItem" key={city._id}>
              <img
                src={city.hotels[0].imgSrc} // Replace with actual image URL property from your city data
                alt={city.city} // Replace with actual city name property
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>{city.city}</h1>
                <h2>{city.hotels.length} properties</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>

    // <div className="featured">
    //   {loading ? (
    //     "Loading please wait"
    //   ) : (
    //     <>
    //       <div className="featuredItem">
    //         <img
    //           src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
    //           alt=""
    //           className="featuredImg"
    //         />
    //         <div className="featuredTitles">
    //           <h1>Berlin</h1>
    //           <h2>{data[0]} properties</h2>
    //         </div>
    //       </div>

    //       <div className="featuredItem">
    //         <img
    //           src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
    //           alt=""
    //           className="featuredImg"
    //         />
    //         <div className="featuredTitles">
    //           <h1>Madrid</h1>
    //           <h2>{data[1]} properties</h2>
    //         </div>
    //       </div>
    //       <div className="featuredItem">
    //         <img
    //           src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
    //           alt=""
    //           className="featuredImg"
    //         />
    //         <div className="featuredTitles">
    //           <h1>London</h1>
    //           <h2>{data[2]} properties</h2>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default Featured;
