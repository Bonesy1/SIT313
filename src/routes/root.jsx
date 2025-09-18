import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from '../App.jsx'
import NewPostPage from '../NewPostPage.jsx'
import 'semantic-ui-css/semantic.min.css'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
  Header,
} from 'semantic-ui-react'
import { Routes, Route, BrowserRouter } from 'react-router'
import Navbar from './Layout.jsx'
import CreateAccount from './CreateAccount.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />} >
              <Route path="/" element={<App />} />
              <Route path="/home" element={<App />} />
              <Route path="/newpost" element={<NewPostPage />} />
              <Route path="/createaccount" element={<CreateAccount />} />
          </Route>
      </Routes>
  </BrowserRouter>
  
)   
 