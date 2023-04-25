import "./Home.scss";
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import EventCard from "../../Ui/Components/EventCard/EventCard";
import { categories } from "../../Utils/constant";
import CategoryCard from "../../Ui/Components/CategoryCard/CategoryCard";

// import EventCardHorizontal from "../Ui/Components/EventCardHorizontal";

const Home = () => {
  return (
    <section className="app__home">
      <nav className="container">
        <div className="nav-left flex">
          <div className="avatar">
            <span className="indicator-item"></span>
            <img src="https://picsum.photos/300/300" />
          </div>
          <div className="content">
            <h4>Hi, Welcome👋🏻</h4>
            <h3>Ayan Nagori</h3>
          </div>
        </div>

        <div className="nav-right">
          <h4>Current Location</h4>
          <h3>
            Basni, 230485
            <MdLocationOn style={{ fill: "red", marginLeft: ".3rem" }} />
          </h3>
        </div>
      </nav>

      <section className="form-container container">
        <form className="flex">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("sumbit");
            }}
            className="center"
          >
            <BiSearch style={{ fill: "white", fontSize: "2rem" }} />
          </button>
          <input type="text" placeholder="Find Amazing Events" />
        </form>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Filter");
          }}
          className="center"
        >
          <CiFilter style={{ fill: "white", fontSize: "2rem" }} />
        </button>
      </section>

      <section className="container">
        <div className="title-bar flex">
          <h2>Popular Events 🔥</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Veiw all");
            }}
          >
            Veiw all
          </button>
        </div>

        <div className="event-card-container">
          <EventCard />
          <EventCard />
        </div>

        <div className="title-bar dark flex">
          <h2>Choose By Category ✨</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Veiw all");
            }}
          >
            Veiw all
          </button>
        </div>

        <div className="category-card-container">
          {categories.map((cate, i) => (
            <CategoryCard
              key={i}
              active={i === 0 ? true : false}
              title={cate}
            />
          ))}
        </div>
      </section>

      {/* <div>
        <EventCardHorizontal />
      </div>  */}
    </section>
  );
};

export default Home;
