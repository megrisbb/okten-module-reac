import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {CatAndDogPage, CommentsPage, HomePage, PostsPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'catdog'} element={<CatAndDogPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};