import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./shared/ProtectedRoute";
import ErrorBoundary from "./ErrorBounderie";
import RootLayot from "./shared/components/UiElements/RootLayot";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayot />, errorElement: <ErrorBoundary />, children: [
      { index: true, element: <Users /> },
      { path: "/auth", element: < Auth /> },
      { path: "/:userId/places", element: < UserPlaces /> },
      {
        element: <ProtectedRoute />, children: [
          { path: "/places/new", element: <NewPlace /> },

          { path: "/places/:placesId", element: < UpdatePlace /> }
        ]
      },
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />
}

export default App
