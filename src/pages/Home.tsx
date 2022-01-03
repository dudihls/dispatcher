import { FlexLayout } from "../components/FlexLayout/FlexLayout";
import { Card } from "../components/Card/Card";
import { ThemeProvider } from "styled-components";
import { theme } from "../global-styles/theme";
import { GlobalStyles } from "../global-styles/Global";
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { DesktopFilter } from "../components/DesktopFilter/DesktopFilter";
import { Modal } from "../components/Modal/Modal";
import { MobileFilterModal } from "../components/MobileFilterModal/MobileFilterModal";
import { MobileFilter } from "../components/MobileFilterBar/MobileFilterBar";
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
    <ThemeProvider theme={theme}>
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
            name: "Search in",
            value: "Everything",
            options: ["Everything", "Top headings"],
          },
          {
            name: "Sources",
            value: "Walla",
            options: ["CSS", "ACDME", "CNN", "JavaScript"],
          },
        ]}
        open={filter}
      />
      <GlobalStyles />
      <FlexLayout direction="col">
        <Navbar />

        <MobileFilter
          onToggleFilter={() => {
            setModal(true);
            setFilter(true);
          }}
        />

        <FlexLayout direction="col">
          <FlexLayout direction="col" rp={30} lp={30}>
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
          </FlexLayout>

          <Card {...args} />
        </FlexLayout>
      </FlexLayout>
    </ThemeProvider>
  );
};
