import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./component/About";
import NotFound from "./component/NotFound";
import Location from "./component/Location/Location";
import RoomManagement from "./component/Room/RoomManagement";
import SignUp from "./component/Auth/Auth";
import HotelDetails from "./component/Location/HotelDetails";
import Rooms from "./component/Room/Rooms";
import Terms from "./component/Terms";

const theme = createTheme({
  typography: {
    fontFamily: "Red Hat Display",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Location />} />

            <Route path="/RoomManagement" element={<RoomManagement />} />

            <Route path="/terms" element={<Terms />} />

            <Route path="/updateRooms" element={<Rooms />} />

            <Route path="/about" element={<About />} />

            <Route path="/register" element={<SignUp />} />

            <Route path="/hotels/:id" element={<HotelDetails />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
