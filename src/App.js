import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {PostDetailsPage} from "./pages/PostDetailsPage/PostDetailsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'comments/:postId'} element={<PostDetailsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};