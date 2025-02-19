import { useState } from "react";
import eventStore from "../../store/eventStore";
import Header from "../../components/Header";
import Calendar from "../../components/ui/EventCard";

const NewEvent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = () => {
    if (title.trim() && date.trim()) {
      eventStore.addEvent(date, title);
      setTitle("");
    }
  };

  const handleDateChange = (value: Date | Date[]) => {
    if (!Array.isArray(value)) {
      setDate(value.toISOString().split("T")[0]);
    }
  };

  return (
    <div>
      <Header />
      <h1>Создать новое событие</h1>

      <Calendar onChange={handleDateChange} />

      <input
        type="text"
        placeholder="Название события"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>✅ Добавить событие</button>
    </div>
  );
};

export default NewEvent;
