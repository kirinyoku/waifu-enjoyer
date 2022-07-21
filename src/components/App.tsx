import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StartPage, ChoicePage, Page404, WaifuPage, TagsPage } from "./pages";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="choice" element={<ChoicePage />} />
                <Route path="nsfw-tags" element={<TagsPage isNsfw={true}/>} />
                <Route path="/nsfw/:tag" element={<WaifuPage isNsfw={true}/>} />
                <Route path="sfw-tags" element={<TagsPage isNsfw={false}/>} />
                <Route path="/sfw/:tag" element={<WaifuPage isNsfw={false}/>} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>       
    );
}

export default App;
