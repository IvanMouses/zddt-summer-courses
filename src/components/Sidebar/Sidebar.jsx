import Courses from "../Courses/Courses";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Courses />
    </div>
  );
}
