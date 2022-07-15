import { Home, Breakfast, Lunch, Shakes } from '../pages';

// chua cac thong so cua 1 route
export const publicRoutes = [ //for user chua dang nhap
   {path: '/', element: Home},
   {path: '/lunch', element: Lunch},
   {path: '/breakfast', element: Breakfast},
   {path: '/shakes', element: Shakes},
]
export const privateRoutes = [ //for user da dang nhap - duong link kin dao :)

]