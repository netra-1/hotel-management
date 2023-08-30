import Register from './register';
import {Routes, Route} from 'react-router-dom';
import Login from './login';
import Dashboard from '../customer/dashboard';
import ProfileUpdate from '../customer/update_profile';
import ShowRoom from '../customer/showRoom';
import SingleRoom from '../customer/singleRoom';
import CustomerPrivateRoute from '../route_protection_customer';
import AdminPrivateRoute from '../route_protection_admin';
import StafPrivateRoute from '../route_protection_staff';
import HomeScreen from './home';
import Contact from './contact';
<<<<<<< HEAD
import About from './about';
import Gallery from './gallery';
import List from '../customer/List';
import CategoryDetails from '../customer/CategoryDetails';
import Food from './food';
import AddRoomCategory from '../admin/addRoomCategory';
import AddList from './list/List';
import { categoryColumns, roomColumns, foodCategoryColumns, foodColumns, staffColumns, customerColumns } from "../datatable/datatablesource";
import UpdateRoomCategory from '../admin/updateRoomCategory';
import AddRoom from '../admin/addRoom';
import UpdateRoom from '../admin/update_room';
import AddFoodCategory from '../admin/addFoodCategory';
import UpdateFoodCategory from '../admin/updateFoodCategory';
import AddFood from '../admin/addFood';
import UpdateFood from '../admin/updateFood';
import GetSingleFood from './getSingleFood';
import FoodCart from '../customer/food_cart';
import FoodOrder from '../customer/food_order';
=======
import StafPrivateRoute from '../route_protection_staff';
import StaffDashboard from '../staff/staff_dashboard';
>>>>>>> staff

import MyBookings from '../customer/myBookings';

import AdminDashboard from '../admin/admin_dashboard';

import MyOrder from '../customer/my_order';

import ShowOrder from '../admin/show_order';

import AddStaff from '../admin/addStaff';

import CustomerAddList from '../staff/customerAdditionList';

import AddCustomer from '../staff/addCustomer';

import ProfileUpdateStaff from '../staff/updateProfileStaff';

import CustomerProfile from '../customer/customerProfile';

import StaffProfile from '../staff/staffProfile';

const Body =()=>{
    return(
        <>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/user_dashboard' element={<Dashboard/>}/>
            <Route path='/customer/profile_update' element={<CustomerPrivateRoute><ProfileUpdate/></CustomerPrivateRoute>}/>
            <Route path='/staff/profile_update' element={<StafPrivateRoute><ProfileUpdateStaff/></StafPrivateRoute>}/>

            <Route path='/show_room' element={<ShowRoom/>}/>
            <Route path='/room/display_single/:id' element={<SingleRoom/>}/>
            <Route path='/contact_us' element={<Contact/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path='/about_us' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path="/room_categorys" element={<List/>}/>
            <Route path="/room_category/get/:id" element={<CategoryDetails/>}/>
            <Route path='/get_food' element={<Food/>}/>
            {/* <Route path='/add_room' element={<PrivateRoute><AddRoom/></PrivateRoute>}/> */}
            <Route path="/room_category" element={ <AdminPrivateRoute> <AddList columns={categoryColumns} /> </AdminPrivateRoute> } />
            <Route path="/room_category/new" element={ <AdminPrivateRoute> <AddRoomCategory /> </AdminPrivateRoute> } />
            <Route path="/room_category/update/:rcatid" element={ <AdminPrivateRoute> <UpdateRoomCategory /> </AdminPrivateRoute> } />

            <Route path="/room" element={ <AdminPrivateRoute> <AddList columns={roomColumns} /> </AdminPrivateRoute> } />
            <Route path="/room/new" element={ <AdminPrivateRoute> <AddRoom /> </AdminPrivateRoute> } />
            <Route path="/room/update/:rid" element={ <AdminPrivateRoute> <UpdateRoom /> </AdminPrivateRoute> } />

            <Route path="/food_category" element={ <AdminPrivateRoute> <AddList columns={foodCategoryColumns} /> </AdminPrivateRoute> } />
            <Route path="/food_category/new" element={ <AdminPrivateRoute> <AddFoodCategory /> </AdminPrivateRoute> } />
            <Route path="/food_category/update/:fcid" element={ <AdminPrivateRoute> <UpdateFoodCategory /> </AdminPrivateRoute> } />

            <Route path="/food" element={ <AdminPrivateRoute> <AddList columns={foodColumns} /> </AdminPrivateRoute> } />
            <Route path="/food/new" element={ <AdminPrivateRoute> <AddFood /> </AdminPrivateRoute> } />
            <Route path="/food/update/:fid" element={ <AdminPrivateRoute> <UpdateFood /> </AdminPrivateRoute> } />
            <Route path='/food/display_single/:id' element={<GetSingleFood/>}/>

            <Route path="/all_staff" element={ <AdminPrivateRoute> <AddList columns={staffColumns} /> </AdminPrivateRoute> } />
            <Route path="/all_staff/new" element={ <AdminPrivateRoute> <AddStaff /> </AdminPrivateRoute> } />

            <Route path="/all_user" element={ <StafPrivateRoute> <CustomerAddList columns={customerColumns} /> </StafPrivateRoute> } />
            <Route path="/all_user/new" element={ <StafPrivateRoute> <AddCustomer /> </StafPrivateRoute> } />

            <Route path='/food_order' element={<FoodOrder/>}/>

            <Route path = '/food_cart' element={<FoodCart/>}/>

            <Route path='/admin_dashboard' element={<AdminPrivateRoute><AdminDashboard/></AdminPrivateRoute>}/>


            <Route path='/my_bookings' element={<MyBookings/>}/>

            <Route path='/my_order' element={<MyOrder/>}/>

            <Route path='/show_orders' element={<ShowOrder/>}/>

            <Route path='/add_staff' element={<AdminPrivateRoute><AddStaff/></AdminPrivateRoute>}/>

            <Route path='/customer_profile' element={<CustomerPrivateRoute><CustomerProfile/></CustomerPrivateRoute>}/>

            <Route path='/staff_profile' element={<StafPrivateRoute><StaffProfile/></StafPrivateRoute>}/>

=======
            <Route path='/show_room' element={<ShowRoom/>}/>
>>>>>>> customer

=======
            <Route path='/staff_dashboard' element={<StafPrivateRoute><StaffDashboard/></StafPrivateRoute>} />
>>>>>>> staff
        </Routes>
        </>
    )
}

export default Body;