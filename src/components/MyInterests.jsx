
import {
  FaLaptop,
  FaGamepad,
  FaHeadphones,
  FaCamera,
  FaPlane,
  FaBookOpen,
} from "react-icons/fa";
const interests = [
  { icon: FaLaptop, name: "Coding" },
  { icon: FaGamepad, name: "Gaming" },
  { icon: FaHeadphones, name: "Music" },
  { icon: FaCamera, name: "Photography" },
  { icon: FaPlane, name: "Travel" },
  { icon: FaBookOpen, name: "Learning" },
];

const MyInterests = () => {
  return (
    <section className="my-interests">
      <div className="row g-3">
        {interests.map((item) => {
          const Icon = item.icon;

          return (
            <div className="col-4" key={item.name}>
              <div className="interest-card shadow-item rounded-3">
                <Icon className="interest-icon" />

                <span className="interest-name fw-medium">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyInterests;
