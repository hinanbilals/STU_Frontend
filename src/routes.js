import React from 'react'
  
//Systems Dashboard
const User= React.lazy(()=>import('./components/dashboardComponent/User'))
const ThumbsUp= React.lazy(()=>import('./components/dashboardComponent/ThumbsUp'))
const TopUser= React.lazy(()=>import('./components/dashboardComponent/TopUser'))
const UserDetail =React.lazy(()=>import('./components/dashboardComponent/UserDetail'))
const PostDetail =React.lazy(()=>import('./components/dashboardComponent/PostDetail'))
const Policies= React.lazy(()=>import('./components/dashboardComponent/Policies'))
 
const routes = [
 
   
  { path: '/', tempPath:'/', exact: true, name: 'All User',component: User, },
  { path: '/users', tempPath:'/users', name: 'All User', component: User, exact: true },
  { path: '/users/user-details/:id',tempPath:'/users/user-details', exact: true,  name: 'User Detail', component: UserDetail },
  { path: '/top-user', tempPath:'/top-user', name: 'Top User', component: TopUser ,exact: true},
  { path: '/top-user/user-details/:id',tempPath:'/top-user/user-details', exact: true,  name: 'User Detail', component: UserDetail },
  { path: '/thumbs-up', tempPath:'/thumbs-up', name: 'ThumbsUp', component: ThumbsUp ,exact: true},
  { path: '/thumbs-up/post-details/:senderId/:mentionedID/:teamID',  tempPath:'/thumbs-up/post-details',name: 'Post Detail', component: PostDetail ,exact: true},
  { path: '/policies', tempPath:'/policies', name: 'Policies', component: Policies ,exact: true},

]

export default routes
