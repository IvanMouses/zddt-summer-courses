import { Link } from "react-router-dom";
import classes from "./Courses.module.css";
import { coursesCardsData } from "./сoursesCardsData";

export default function Courses() {
  return (
    <section className={classes.courses}>
      <div className={classes.coursesContainer}>
        <Link
          to="/schedule"
          type="button"
          className={classes.showScheduleButton}
        >
          Расписание занятий
        </Link>
        <div className={classes.coursesCards}>
          {coursesCardsData.map((card) => (
            <Link
              to={card.title}
              key={card.title}
              className={classes.coursesCard}
            >
              <div className={classes.coursesCardBody}>
                <div className={classes.coursesCardImage}>
                  <img
                    loading="lazy"
                    src={card.image.src}
                    alt=""
                    className={classes.coursesCardPicture}
                  />
                </div>
                <h3 className={classes.coursesCardTitle}>{card.title}</h3>
                <div className={classes.coursesCardExtra}>
                  <span className={classes.coursesCardExtraText}>
                    с {card.extraText[0]} до{" "}
                    {card.extraText[card.extraText.length - 1]} лет
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
