import PersonList from "./personList/PersonList";
import AddPerson from "./addPerson/AddPerson";
import RegistrationTuition from "./registerationTuition/RegistrationTuition";
import EnterAndExit from "./enterAndExit/EnterAndExit";
import { Route, Routes } from "react-router-dom";

const MainSection = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<PersonList />} />
                <Route path="/personList" element={<PersonList />} />
                <Route path="/addPerson" element={<AddPerson />} >
                    <Route path=":id" />
                </Route>
                <Route path="/enterAndExit" element={<EnterAndExit />}>
                    <Route path=":id" />
                </Route>
                <Route path="/registrationTuition" element={<RegistrationTuition />} />
            </Routes>
        </section>
    )
}

export default MainSection;