import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorBoundary from "./ErrorBounderie";
import RootLayot from "./shared/components/UiElements/RootLayot";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayot />, errorElement: <ErrorBoundary />, children: [
      { index: true, element: <Users /> },
      { path: "/places/new", element: <NewPlace /> },
      { path: "/:userId/places", element: < UserPlaces /> },
      { path: "/places/:placesId", element: < UpdatePlace /> }
    ]
  },

]);

function App() {

  return <RouterProvider router={router} />
}

export default App
