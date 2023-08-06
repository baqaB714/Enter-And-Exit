import react from "react";
import PersonList from "./personList/PersonList";
import AddPerson from "./addPerson/AddPerson";
import RegistrationTuition from "./registerationTuition/RegistrationTuition";
import EnterAndExit from "./enterAndExit/EnterAndExit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainSection = () => {
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/personList" element={<PersonList />} />
                    <Route path="/addPerson" element={<AddPerson />} />
                    <Route path="/enterAndExit" element={<EnterAndExit />} />
                    <Route path="/registrationTuition" element={<RegistrationTuition />} />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default MainSection;