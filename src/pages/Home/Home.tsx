import { Card } from "../../components/Card/Card";
import { theme } from "../../global-styles/theme";
import { GlobalStyles } from "../../global-styles/Global";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { DesktopFilter } from "../../components/DesktopFilter/DesktopFilter";
import { Modal } from "../../components/Modal/Modal";
import { MobileFilterModal } from "../../components/MobileFilterModal/MobileFilterModal";
import { MobileFilter } from "../../components/MobileFilterBar/MobileFilterBar";
import { DoughnutGraph } from "../../components/Graphs";
import { AreaGraph } from "../../components/Graphs/AreaGraph/AreaGraph";
import { BarGraph } from "../../components/Graphs/BarGraph/BarGraph";
const args = {
  img: "https://i.natgeofe.com/k/8fd6eca1-0808-4e4a-ac49-bb87f8821a0b/first-olympics-textimage_2_4x3.jpg",
  content:
    "Make it five for Caeleb Dressel.\r\nThe American star won his fifth gold medal of the Tokyo Games, finishing off one of the great performances in Olympic history. He joins an elite club of just four ot… [+1179 chars]",
  date: "Friday Jun 25, 2021",
  tags: ["sport", "news", "+2"],
  header:
    "Caeleb Dressel joins elite club with 5th Olympic gold medal - Fox News",
  source: "Associated Press, Fox News",
  onClick: () => console.log("hello world"),
};

export const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  }, [startDate, endDate]);

  return (
    <>
      {modal && (
        <Modal
          ToggleModal={() => {
            setModal(false);
            setFilter(false);
          }}
        />
      )}
      <MobileFilterModal
        filters={[
          {
            header: "Search in",
            value: "Everything",
            options: ["Everything", "Top headings"],
          },
          {
            header: "Sources",
            value: "",
            options: ["CSS", "ACDME", "CNN", "JavaScript"],
          },
        ]}
        open={filter}
      />
      <GlobalStyles />
      <Navbar />

      <MobileFilter
        onToggleFilter={() => {
          setModal(true);
          setFilter(true);
        }}
      />

      <DesktopFilter
        dropdowns={[
          { initialValue: "Country", options: ["1", "2"] },
          { initialValue: "papa", options: ["23"] },
          {
            initialDate: new Date(),
            onSubmitDate: (startDate, endDate) => {
              setStartDate(startDate);
              setEndDate(endDate);
            },
          },
        ]}
      />

      <Card {...args} />
      <DoughnutGraph
        innerText="Sum"
        header="Sources"
        data={[
          { name: "a", value: 12 },
          { name: "b", value: 19 },
          { name: "c", value: 3 },
          { name: "d", value: 5 },
        ]}
        colorPalette={theme.graphColorPalette.doughnut}
      />
      <AreaGraph
        header="Dates"
        data={[
          {
            name: "Jan",
            value: 2400,
          },
          {
            name: "Fab",
            value: 2210,
          },
          {
            name: "Mar",
            value: 2290,
          },
          {
            name: "APR",
            value: 4000,
          },

          {
            name: "AUG",
            value: 5000,
          },
          {
            name: "AUG",
            value: 5000,
          },
          {
            name: "AUG",
            value: 5000,
          },
        ]}
      ></AreaGraph>
      <BarGraph
        data={[
          {
            name: "APR",
            value: 4000,
          },

          {
            name: "AUG",
            value: 5000,
          },
          {
            name: "AUG",
            value: 5000,
          },
          {
            name: "AUG",
            value: 5000,
          },
          { name: "asshjf", value: 1234 },
          { name: "bsadf", value: 12349 },
          { name: "cs", value: 3333 },
          { name: "dff", value: 25 },
        ]}
        header="Tags"
      />
    </>
  );
};
