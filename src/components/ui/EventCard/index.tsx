import React from "react";
import styles from "./EventCard.module.scss";

interface EventCardProps {
  title: string;
  date: string;
  onDelete: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, onDelete }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventInfo}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        ❌ Удалить
      </button>
    </div>
  );
};

export default EventCard;
