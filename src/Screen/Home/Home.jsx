import "./Home.scss";
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
// import EventCard from "../Ui/Components/EventCard";
// import EventCardHorizontal from "../Ui/Components/EventCardHorizontal";
// import CategoryCard from "../Ui/Components/CategoryCard";
// import { categories } from "../Utils/constant";

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
            <h3>Hi, Welcome👋🏻</h3>
            <h2>Ayan</h2>
          </div>
        </div>

        <div className="nav-right">
          <h3 className="text-xs font-[200] text-white">Current Location</h3>
          <h2>
            Basni, 230485
            <span>
              <MdLocationOn style={{ fill: "red" }} />
            </span>
          </h2>
        </div>
      </nav>

      <div className="form-container container">
        <form className="flex">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("sumbit");
            }}
            className="btn bg btn-square bg-transparent"
          >
            <BiSearch style={{ fill: "white", fontSize: "2rem" }} />
          </button>
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered bg-transparent px-2 text-white"
          />
        </form>
        <button className="center">
          <CiFilter style={{ fill: "white", fontSize: "2rem" }} />
        </button>
      </div>

      {/*
      <h1 className="mb-3 text-lg font-bold text-white">Popular Events 🔥</h1>
      <div className="hide-scrollbar mb-5 flex overflow-x-scroll px-0.5 py-1">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <h1 className="my-3 text-lg font-bold">Choose By Category ✨</h1>
      <div className="hide-scrollbar mb-5 flex overflow-x-scroll">
        {categories.map((cate, i) => (
          <CategoryCard key={i} active={i === 0 ? true : false} title={cate} />
        ))}
      </div>

      <div>
        <EventCardHorizontal />
      </div> */}
    </section>
  );
};

export default Home;
