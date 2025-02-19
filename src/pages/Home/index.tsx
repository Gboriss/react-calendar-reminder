import { observer } from "mobx-react-lite";
import eventStore from "../../store/eventStore";
import Header from "../../components/Header";
import EventCard from "../../components/ui/EventCard";
import CustomCalendar from "../../components/Calendar";
import { useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FC = observer(() => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const events = eventStore.getEventsByDate(selectedDate);

  const handleDateChange = (value: Date | Date[]) => {
    if (!Array.isArray(value)) {
      setSelectedDate(value.toISOString().split("T")[0]);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <h1 className={styles.title}>Календарь событий</h1>

      {/* Календарь */}
      <CustomCalendar onChange={handleDateChange} />

      <div className={styles.eventsContainer}>
        {events.length === 0 ? (
          <p>На этот день нет событий 😔</p>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={selectedDate}
              onDelete={() => eventStore.removeEvent(selectedDate, event.id)}
            />
          ))
        )}
      </div>
    </div>
  );
});

export default Home;
