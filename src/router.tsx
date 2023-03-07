import { createBrowserRouter } from "react-router-dom";
import { PostPage, GeneralPage, ErrorPage, SinglePostPage } from "./routes/index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <GeneralPage />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/posts', element: <PostPage /> },
            { path: '/posts/:postId', element: <SinglePostPage /> },
        ]
    },

]);

export default router;