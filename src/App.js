
import { useState } from 'react';
import { useEffect } from "react";
import './App.css';
import ParentComponent from './ParentComponent';
import Parents from './ParentsComponent';
import Father from './Father';
import { Provider } from './Context';
import HomeComponent from './HomeComponent';
import RenderingCheck from './RenderingCheckComponent';
import UseRefDemo from './UseRefDemoComponent';
import UseMemoDemo from './UseMemoDemo';
import CompanComp from './Company';
import FormValidationComponent from './FormValidation';
import ReactForm from './ReactForm';
import FormTwoComponent from './FormTwo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormOne from './FormOne';
import ReviewForm from './ReviewForm';
import PageOne from './PageOneComponent';
import PageTwo from './PageTwoComponent';import FormPracticeComponent from './FormValidationPractice';
import Conditional from './ConditionalRendering';
import FuncBorrowing from './CallApplyBind';
import ChangeColor from './ChangeColor';
import CustomHooKUsageComp from './CustomHookTrial';
import CapitalString from './CapitalInputDemo';
import FormComponent from './Form';

import JavaScriptPractice from './JsPractice';
import ButtonCounter from './Counter';
import CheckBoxSelect from './CheckBoxSelect';
import CurrencyConverter from './CurrencyCoverter';
// import Parent from './ParentPage';
import GetDataFromServiceUI from './GetDataFromServiceUI';
import ServiceTestingUI from './ServiceTestingUI';
import CurrencyExchange from './CurrencyExchange';
import PersonalDetails from './PersonalDetails';
import AddingElementsInArray from './AddingElementsInArray';
import ArrayPractice from './ArrayPractice';
import ParentBtn from './ParentBtn';
import ParentDesigner from './ParentDesigner';
import ToDo from './ToDo';
import ToDoList from './ToDoList';



import Parent from '../src/DataFromChildToParent/Parent';
import ParentRerenderDemo from './ComponentRerenderDemos/ParentRerenderDemo';
import ContextConsumerPage from './UseContextFiles/ContextConsumer';
import StateContextProvider from './UseContextFiles/StateContext';
import ReactFormComponent from './FormValidations/ReactForm';
import ReferencHook from './ReferenceHook/ReferenceHook';
import FormValidationReact from './FormValidationReact';
import BasicFormValidation from './BasicFormValidation';
































function App() {
 
 





return(
  <BrowserRouter>
   <StateContextProvider>
    {/* <ContextConsumerPage/> */}
        {/* <Route path="/" element={<ContextConsumerPage />}>  </Route> */}
        </StateContextProvider>
      <Routes>
       
     <Route path='/' element={<BasicFormValidation/>}> </Route>
        <Route path="/PageTwo" element={<PageTwo />}>  </Route>
        
        <Route path="/Review" element={<ReviewForm />}>  </Route>
        

        
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
    </BrowserRouter>
  // <div>

  // <FormTwoComponent/>
 

  // </div>
)

}

export default App;
